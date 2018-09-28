import * as React from "react";
import { mount } from "enzyme";
import configureStore from 'redux-mock-store'

import PhoneListContainer from "./PhoneListContainer";
import { Provider } from "react-redux";

const initialState = {
    mobiles: [{
        id: 1,
        title: "Samsung S7",
        color: "blue",
        description: "Samsung, OLED 6.1\" Full HD+, Kirin 970+IA, 6 GB RAM, 128 GB, Triple cámara Leica, Dual SIM, Negro",
        image: "https://images.samsung.com/is/image/samsung/es-galaxy-s7-g930f-sm-g930fzkaphe-001-front2-black?$PD_GALLERY_L_JPG$",
        price: 1500
    }, {
        id: 2,
        title: "iPhone 7",
        color: "yellow",
        description: "iPhone, OLED 6.1\" Full HD+, Kirin 970+IA, 6 GB RAM, 128 GB, Triple cámara Leica, Dual SIM, Negro",
        image: "https://www.aca-electronic.com/52-thickbox_default/iphone-7-a1778-32gb-ios10-120mp-ram-2gb-4g-lte.jpg",
        price: 5500
    }, {
        id: 3,
        title: "Huawei P20 Pro",
        color: "Dark",
        description: "Huawei P20 Pro, OLED 6.1\" Full HD+, Kirin 970+IA, 6 GB RAM, 128 GB, Triple cámara Leica, Dual SIM, Negro",
        image: "https://www.buymobiles.net/library/images/handsets/huawei/huawei-p20-pro-black_1.png",
        price: 600
    }]
}


const mockStore = configureStore()
const store = mockStore(initialState)
const container = mount(<Provider store={store}><PhoneListContainer /></Provider>)

test("<PhoneListContainer />", () => {
    expect(container).toMatchSnapshot();
});