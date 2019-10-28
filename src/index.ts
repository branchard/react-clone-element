import * as React from 'react';
import {ReactElement, ComponentProps} from "react";

type ObjectWithAnyKey = { [key: string]: string };

const replacementMap: ObjectWithAnyKey = {
    "class": "className"
};

function getElementProps(element: HTMLElement): ObjectWithAnyKey {
    const props: { [key: string]: string } = {};

    for (const attribute of element.attributes) {
        props[attribute.localName in replacementMap ? replacementMap[attribute.localName] : attribute.localName] = attribute.value;
    }

    return props
}

function getElementName(element: HTMLElement): string {
    return element.nodeName.toLowerCase();
}

export function cloneElement(element: HTMLElement, customProps: ComponentProps<any> = {}): ReactElement | undefined {
    if (element === null || element === undefined) {
        return undefined;
    }

    // customProps override element.attributes
    return React.createElement(getElementName(element), {...getElementProps(element), ...customProps});
}

export function CloneElement(props: { element: HTMLElement, children?: undefined, [key: string]: any }): ReactElement | undefined {
    const {element, ...customProps} = props;
    return cloneElement(props.element, customProps)
}