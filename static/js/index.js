'use strict';

const IS_DEV_ENV = (window.location.origin.includes('127.0.0.1') || window.location.origin.includes('localhost'));
const UNDER_CONSTRUCTION = document.querySelector('.under-construction');


function toggleTheCurtains() {
    UNDER_CONSTRUCTION.classList.toggle('hidden');
}

function onContentLoaded(event) {
    document.removeEventListener('DOMContentLoaded', onContentLoaded);

    // Temporary
    if (IS_DEV_ENV) {
        toggleTheCurtains();
    }
}

function onDocumentClose(event) {
    document.removeEventListener('close', onDocumentClose);
}

document.addEventListener('DOMContentLoaded', onContentLoaded);
document.addEventListener('close', onDocumentClose);