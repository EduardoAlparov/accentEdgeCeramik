import Map from "./Map.js";

export default () => {
    if(!document.getElementById('yamapsId')) {
        return;
    } else {
        const map = new Map('yamapsId', {
            // map center:
            center: [55.798409, 49.125719],
            // map zoom value:
            zoom: 11,
            // placemarks:
            coords: [
                [53.201369, 50.146295],
                [55.617571, 51.810487],
                [55.872996, 49.048383]
            ],
            // map control elements:
            controls: [

            ]
        })

        const popupMapButtons = Array.from(document.querySelectorAll('.popup-map__button'));
        const pickupAddressInput = document.getElementById('js-pickup-address');

        if(popupMapButtons.length) {
            pickupAddressInput.value = popupMapButtons[0].querySelector('.popup-map__address').textContent;

            popupMapButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    popupMapButtons.forEach(b => {
                        b.classList.remove('popup-map__button--active');
                    })

                    btn.classList.add('popup-map__button--active');

                    let coordsValue = btn.dataset.coord.split(', ');
                    map.clearMap();
                    map.setNewPlacemark(coordsValue);

                    pickupAddressInput.value = btn.querySelector('.popup-map__address').textContent;
                })
            })
        }
    }
}
