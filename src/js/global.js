/* eslint-disable no-jquery/no-other-methods */
/* eslint-disable no-jquery/no-jquery-constructor, no-jquery/no-ajax, no-jquery/no-serialize */

import $ from 'jquery';

const menuToggle = document.querySelector('.js-menu-toggle');
const menuOverlay = document.querySelector('.kin-header__overlay');
const cartToggle = document.querySelector('.js-cart-toggle');
const closeMiniArrow = document.querySelector('.kin-header__mini-cart-close');
const continueShopping = document.querySelector('.kin-header__mini-cart-close-btn');

menuToggle.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

cartToggle.addEventListener('click', openCart);
closeMiniArrow.addEventListener('click', closeCart);
continueShopping.addEventListener('click', closeCart);

function toggleMenu() {
    const body = document.querySelector('body');
    const navigation = document.querySelector('.kin-header__flyout-menu');
    const menuText = menuToggle.textContent.replace(/\s+/g, '');

    menuToggle.classList.toggle('is-active');

    if (menuText === 'menu') {
        menuToggle.textContent = 'close';
    } else {
        menuToggle.textContent = 'menu';
    }

    body.classList.toggle('overflow-hidden');
    body.classList.toggle('menu-opened');

    navigation.classList.toggle('kin-header__flyout-menu--active');

    closeCart();
}

function openCart() {
    const body = document.querySelector('body');
    const miniCart = document.querySelector('.kin-header__mini-cart');

    body.classList.add('overflow-hidden');
    body.classList.add('mini-cart-opened');

    miniCart.classList.add('kin-header__mini-cart--active');
}

function closeCart() {
    const body = document.querySelector('body');
    const miniCart = document.querySelector('.kin-header__mini-cart');

    body.classList.remove('overflow-hidden');
    body.classList.remove('mini-cart-opened');

    miniCart.classList.remove('kin-header__mini-cart--active');
}

// Ajax API functionality
const addToCartFormSelector = '#add-to-cart-form';
const miniCartContentsSelector = '.kin-header__mini-cart-contents';

const ajaxify = {
    onAddToCart(event) {
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: '/cart/add.js',
            data: $(this).serialize(),
            dataType: 'json',
            success: ajaxify.onCartUpdated,
            error: ajaxify.onError
        });
    },
    onLineRemoved(event) {
        event.preventDefault();

        const $removeLink = $(this);
        const removeQuery = $removeLink.attr('href').split('change?')[1];

        $.post('/cart/change.js', removeQuery, ajaxify.onCartUpdated, 'json');
    },
    onCartUpdated() {
        console.log('added');
        const $miniCartFieldSet = $(`${miniCartContentsSelector} .js-cart-fieldset`);

        // eslint-disable-next-line no-jquery/no-prop
        $miniCartFieldSet.prop('disabled', true);

        $.ajax({
            type: 'GET',
            url: '/cart',
            context: document.body,
            success(context) {
                const $dataCartContents = $(context).find('.js-cart-page-contents');
                const dataCartHtml = $dataCartContents.html();
                const dataCartItemCount = $dataCartContents.attr('data-cart-item-count');
                const $miniCartContents = $(miniCartContentsSelector);
                const $cartItemCount = $('.js-cart-item-count');

                $cartItemCount.text(dataCartItemCount);
                $miniCartContents.html(dataCartHtml);

                openCart();

                const leftOverLineItems = $('.kin-header__mini-cart .cart-form');
                const $miniCart = $('.kin-header__mini-cart');

                if (leftOverLineItems.length === 0) {
                    $miniCart.removeClass('kin-header__mini-cart--full');
                } else {
                    $miniCart.addClass('kin-header__mini-cart--full');
                }
            }
        });
    },
    onError(XMLHttpRequest) {
        const data = XMLHttpRequest.responseJSON;
        // eslint-disable-next-line no-alert
        alert(`${data.status} - ${data.message} : ${data.description}`);
    },
    init() {
        $(document).on('submit', addToCartFormSelector, ajaxify.onAddToCart);
        $(document).on('click', '.js-remove-line', ajaxify.onLineRemoved);
    }
};

ajaxify.init();

// Quantity Fields

const quantityFieldSelector = '.js-quantity-field';
const quantityButtonSelector = '.js-quantity-button';
const quantityPickerSelector = '.js-quantity-picker';

const quantityPicker = {
    onButtonClick() {
        const $button = $(this);
        const $picker = $button.closest(quantityPickerSelector);
        const $quantity = $picker.find('.js-quantity-field');
        const quantityValue = parseInt($quantity.val(), 10);
        const max = $quantity.attr('max') ? parseInt($quantity.attr('max'), 10) : null;

        if ($button.hasClass('plus') && (max === null || quantityValue + 1 <= max)) {
            $quantity.val(quantityValue + 1).trigger('change');
        } else if ($button.hasClass('minus')) {
            $quantity.val(quantityValue - 1).trigger('change');
        }
    },

    onChange() {
        const $field = $(this);
        const $picker = $field.closest(quantityPickerSelector);
        const $quantityText = $picker.find('.js-quantity-text');
        const shouldDisableMinus = parseInt(this.value, 10) === parseInt($field.attr('min'), 10);
        const shouldDisablePlus = parseInt(this.value, 10) === parseInt($field.attr('max'), 10);
        const $minusButton = $picker.find('.js-quantity-button.minus');
        const $plusButton = $picker.find('.js-quantity-button.plus');

        $quantityText.text(this.value);

        if (shouldDisableMinus) {
            $minusButton.prop('disabled', true);
        } else if ($minusButton.prop('disabled') === true) {
            $minusButton.prop('disabled', false);
        }

        if (shouldDisablePlus) {
            $plusButton.prop('disabled', true);
        } else if ($plusButton.prop('disabled') === true) {
            $plusButton.prop('disabled', false);
        }
    },
    init() {
        $(document).on('click', quantityButtonSelector, quantityPicker.onButtonClick);
        $(document).on('change', quantityFieldSelector, quantityPicker.onChange);
    }

};

quantityPicker.init();

// line item
const removeLineSelector = '.js-remove-line';
const lineQuantitySelector = '.js-line-quantity';

const lineItem = {
    isInMiniCart(element) {
        const $element = $(element);
        const $miniCart = $element.closest(miniCartContentsSelector);
        const isInMiniCart = $miniCart.length !== 0;

        return isInMiniCart;
    },
    onLineQuantityChanged() {
        const quantity = this.value;
        const id = $(this).attr('id').replace('updates_', '');
        const changes = {
            quantity,
            id
        };

        const isInMiniCart = lineItem.isInMiniCart(this);

        if (isInMiniCart) {
            $.post('/cart/change.js', changes, ajaxify.onCartUpdated, 'json');
        }
    },
    onLineRemoved(event) {
        const isInMiniCart = lineItem.isInMiniCart(this);
        if (isInMiniCart) {
            event.preventDefault();

            const $removeLink = $(this);
            const removeQuery = $removeLink.attr('href').split('change?')[1];

            $.post('/cart/change.js', removeQuery, ajaxify.onCartUpdated, 'json');
        }
    },
    init() {
        $(document).on('click', removeLineSelector, lineItem.onLineRemoved);
        $(document).on('change', lineQuantitySelector, lineItem.onLineQuantityChanged);
    }
};

lineItem.init();
