"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-toggle="animation"]');

    function addAnimation(element: HTMLElement, event: string) {
        if (event === 'fpAfterLoad') {
            if (element.closest('.fp-section')?.classList.contains('active')) {
                element.classList.add('animate');
            }
        } else {
            element.classList.add('animate');
        }
    }

    ['load', 'fpAfterLoad'].forEach(event => {
        window.addEventListener(event, (event: Event) => {
            const eventType = event.type;

            elements.forEach(element => {
                const animationTrigger = element.getAttribute('data-animation-trigger');

                if (animationTrigger === 'load' && eventType === 'load') {
                    addAnimation(element, eventType);
                }

                if (animationTrigger === 'fpAfterLoad' && eventType === 'fpAfterLoad') {
                    const destinationIndex = (event as CustomEvent).detail.destination.index;
                    addAnimation(element, eventType);
                }

                if ((animationTrigger === 'enter' && eventType === 'load') || (animationTrigger === 'entered' && eventType === 'load')) {
                    new Waypoint.Inview({
                        element: element,
                        enter: () => {
                            if (animationTrigger === 'enter') {
                                addAnimation(element, eventType);
                            }
                        },
                        entered: () => {
                            if (animationTrigger === 'entered') {
                                addAnimation(element, eventType);
                            }
                        }
                    });
                }
            });
        });
    });

    window.addEventListener('alert.show', (event: CustomEvent) => {
        const detail = event.detail;
        const message = detail.message;
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', `alert-${detail.type}`, 'alert-fixed', 'fade', 'show');
        alertDiv.innerHTML = message.replace('0 -', '');
        document.body.appendChild(alertDiv);

        setTimeout(() => {
            $(alertDiv).alert('close');
        }, 5000);
    });

    const codeElements = document.querySelectorAll('.code');
    if (window.hljs) {
        codeElements.forEach((element: HTMLElement) => {
            hljs.highlightBlock(element);
        });
    }

    const dropdownToggleElements = document.querySelectorAll('.dropdown-menu .dropdown-toggle');
    if (dropdownToggleElements) {
        dropdownToggleElements.forEach((toggleElement: HTMLElement) => {
            toggleElement.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();

                const target = event.target as HTMLElement;
                const dropdownMenus = target.closest('.dropdown-menu')?.querySelectorAll('.dropdown-menu');
                const activeMenu = target.parentElement?.querySelector('.dropdown-menu');

                dropdownMenus?.forEach(menu => {
                    if (menu !== activeMenu) {
                        menu.classList.remove('show');
                    }
                });

                activeMenu?.classList.toggle('show');
            });
        });

        $(document.querySelectorAll('.dropup, .dropright, .dropdown, .dropleft')).on('hide.bs.dropdown', (event) => {
            const dropdownMenus = event.target?.querySelectorAll('.dropdown-menu');
            dropdownMenus?.forEach(menu => {
                menu.classList.remove('show');
            });
        });
    }

    const faqCollapseElements = document.querySelectorAll('.faq-item .collapse');
    if (faqCollapseElements) {
        faqCollapseElements.forEach((collapseElement: HTMLElement) => {
            const $collapseElement = $(collapseElement);
            $collapseElement.on('show.bs.collapse', () => {
                $collapseElement.closest('.faq').find('.collapse').not($collapseElement).collapse('hide');
            });
        });
    }

    const fullPageWrapper = document.querySelector('.fp-wrapper');
    if (fullPageWrapper) {
        new fullpage(fullPageWrapper, {
            licenseKey: 'CA9DA262-9BD6447E-B1BF8C11-D1480312',
            anchors: ['hero', 'about-1', 'about-2', 'services', 'promo', 'testimonials', 'pricing'],
            sectionSelector: '.fp-section',
            scrollingSpeed: 700,
            easingcss3: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            scrollOverflow: true,
            responsiveWidth: 768,
            afterLoad: (origin, destination, direction) => {
                const customEvent = new CustomEvent('fpAfterLoad', {
                    detail: {
                        origin: origin,
                        destination: destination,
                        direction: direction
                    }
                });
                window.dispatchEvent(customEvent);
            },
            onLeave: (origin, destination, direction) => {
                const customEvent = new CustomEvent('fpOnLeave', {
                    detail: {
                        origin: origin,
                        destination: destination,
                        direction: direction
                    }
                });
                window.dispatchEvent(customEvent);
            }
        });
    }

    const mapContainers = document.querySelectorAll('.map-container');
    if (mapContainers) {
        mapContainers.forEach((mapContainer: HTMLElement) => {
            const zoom = parseInt(mapContainer.getAttribute('data-zoom') || '0');
            const markers = JSON.parse(mapContainer.getAttribute('data-markers') || '[]');
            const center = { lat: markers[0][0], lng: markers[0][1] };

            const map = new google.maps.Map(mapContainer, {
                center: center,
                styles: [...],
                zoom: zoom
            });

            const bounds = new google.maps.LatLngBounds();
            markers.forEach((markerCoords: number[]) => {
                const position = { lat: markerCoords[0], lng: markerCoords[1] };
                new google.maps.Marker({
                    position: position,
                    map: map
                });
                bounds.extend(position);
            });

            if (!zoom) {
                map.fitBounds(bounds);
            }
        });
    }

    const modal = document.querySelector('.modal');
    if (modal) {
        $(modal).on('shown.bs.modal hide.bs.modal', function (event) {
            const video = this.querySelector('video');
            if (video && event.type === 'shown') {
                video.play();
            } else if (video && event.type === 'hide') {
                video.pause();
            }
        });
    }

    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const isNavbarTogglable = navbar?.classList.contains('navbar-togglable');

    let isLightNavbar = false;
    let isScrolled = false;

    function switchToLightNavbar() {
        if (!isLightNavbar && isNavbarTogglable) {
            navbar?.classList.remove('navbar-dark');
            navbar?.classList.add('navbar-light');
            isLightNavbar = true;
        }
    }

    function switchToDarkNavbar() {
        if (isLightNavbar && isNavbarTogglable) {
            navbar?.classList.remove('navbar-light');
            navbar?.classList.add('navbar-dark');
            isLightNavbar = false;
        }
    }

    function handleNavbar(eventType: string, destinationIndex?: number) {
        if (eventType === 'fpOnLeave') {
            if (destinationIndex === 0) {
                switchToDarkNavbar();
            } else {
                switchToLightNavbar();
            }
        } else if (eventType === 'collapse') {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop === 0 && isScrolled) {
                switchToDarkNavbar();
            } else {
                switchToLightNavbar();
            }
        } else if (eventType === 'scroll' || eventType === 'load') {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop === 0 && !isScrolled && isLightNavbar) {
                switchToDarkNavbar();
            } else if (scrollTop !== 0 && isLightNavbar) {
                switchToLightNavbar();
            }
        }
    }

    ['load', 'scroll', 'fpOnLeave'].forEach(eventType => {
        window.addEventListener(eventType, (event: Event) => {
            const customEvent = event as CustomEvent;
            const destinationIndex = customEvent.detail ? customEvent.detail.destination.index : undefined;
            handleNavbar(eventType, destinationIndex);
        });
    });

    navbarCollapse?.addEventListener('show.bs.collapse', () => {
        handleNavbar('collapse');
        isScrolled = true;
    });

    navbarCollapse?.addEventListener('hidden.bs.collapse', () => {
        handleNavbar('collapse');
        isScrolled = false;
    });

    const mcEmbeddedSubscribeForm = document.querySelector('#mc-embedded-subscribe-form');
    const mceEmail = document.querySelector('#mce-EMAIL');
    const formMailchimpCloneElements = document.querySelectorAll('.form-mailchimp-clone');
    const formMailchimpInputs = document.querySelectorAll('.form-mailchimp-clone input[type="email"]');
    const connectionErrorMessage = 'Could not connect to the registration server. Please try again later.';

    if (mcEmbeddedSubscribeForm) {
        mcEmbeddedSubscribeForm.addEventListener('submit', (event: Event) => {
            event.preventDefault();

            const formData = new FormData(mcEmbeddedSubscribeForm);
            const xhr = new XMLHttpRequest();
            xhr.open(mcEmbeddedSubscribeForm.getAttribute('method') || '', mcEmbeddedSubscribeForm.getAttribute('action') || '', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 400) {
                    const response = JSON.parse(xhr.responseText);
                    if (response.result !== 'success') {
                        const customEvent = new CustomEvent('alert.show', {
                            detail: {
                                type: 'danger',
                                message: response.msg
                            }
                        });
                        window.dispatchEvent(customEvent);
                    } else {
                        const customEvent = new CustomEvent('alert.show', {
                            detail: {
                                type: 'success',
                                message: response.msg
                            }
                        });
                        window.dispatchEvent(customEvent);
                        mcEmbeddedSubscribeForm.reset();
                    }
                } else {
                    const customEvent = new CustomEvent('alert.show', {
                        detail: {
                            type: 'danger',
                            message: connectionErrorMessage
                        }
                    });
                    window.dispatchEvent(customEvent);
                }
            };

            xhr.onerror = () => {
                const customEvent = new CustomEvent('alert.show', {
                    detail: {
                        type: 'danger',
                        message: connectionErrorMessage
                    }
                });
                window.dispatchEvent(customEvent);
            };

            xhr.send(new URLSearchParams(formData as any).toString());
        });
    }

    if (formMailchimpCloneElements) {
        formMailchimpCloneElements.forEach((cloneElement: HTMLElement) => {
            cloneElement.addEventListener('submit', (event: Event) => {
                event.preventDefault();
                mcEmbeddedSubscribeForm?.submit();
            });
        });
    }

    if (formMailchimpInputs) {
        formMailchimpInputs.forEach((inputElement: HTMLInputElement) => {
            inputElement.addEventListener('keyup', () => {
                mceEmail?.setAttribute('value', inputElement.value);
            });
        });
    }

    if (typeof window.CustomEvent !== 'function') {
        function CustomEvent(event: string, params: any = {}) {
            params = params || { bubbles: false, cancelable: false, detail: undefined };
            const evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }
        CustomEvent.prototype = window.Event.prototype;
        window.CustomEvent = CustomEvent;
    }

    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }

    if (!Element.prototype.closest) {
        Element.prototype.closest = function (s: string) {
            let el: any = this;
            if (!document.documentElement.contains(el)) return null;
            do {
                if (el.matches(s)) return el;
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
        };
    }

    const sliders = document.querySelectorAll('.slider');
    if (sliders) {
        sliders.forEach((slider: HTMLElement) => {
            new Flickity(slider, {
                arrowShape: 'M 35 50 L 60 25 L 65 30 L 45 50 L 65 70 L 60 75 Z',
                cellAlign: 'left',
                contain: true,
                draggable: !slider.classList.contains('slider-no-draggable'),
                fade: slider.classList.contains('slider-fade'),
                imagesLoaded: true,
                pageDots: false,
                prevNextButtons: !slider.classList.contains('slider-no-controls'),
                wrapAround: true
            });
        });
    }

    const testimonialSliders = document.querySelectorAll('.testimonial-slider');
    if (testimonialSliders) {
        testimonialSliders.forEach((slider: HTMLElement) => {
            new Flickity(slider, {
                cellAlign: 'center',
                initialIndex: 2,
                prevNextButtons: false,
                pageDots: false,
                contain: true,
                wrapAround: true,
                imagesLoaded: true,
                percentPosition: true
            });
        });
    }

    const currentYearElements = document.querySelectorAll('.current-year');
    if (currentYearElements) {
        currentYearElements.forEach((currentYearElement: HTMLElement) => {
            const year = (new Date()).getFullYear();
            const textNode = document.createTextNode(year.toString());
            currentYearElement.appendChild(textNode);
        });
    }
});
