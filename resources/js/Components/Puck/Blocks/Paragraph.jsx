/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Autofield } from "@measured/puck";
import { marginFields, paddingFields } from "./CommonBlockProps";

export const Paragraph = {
    label: "Paragraph",
    fields: {
        body: { type: "textarea", autosize: true, name: 'body', id: 'body' },
        align: {
            type: "radio",
            options: [
                { label: "left", value: "left" },
                { label: "center", value: "center" },
                { label: "right", value: "right" },
            ],
        },

        margins: marginFields.fields,
        paddings: paddingFields.fields,
    },
    defaultProps: {
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto maiores excepturi delectus nam pariatur commodi libero, non impedit! Et labore ducimus perferendis placeat deserunt impedit fugiat. Reiciendis autem accusamus quam.",
        align: "left",
        margins: marginFields.defaultProps,
        paddings: paddingFields.defaultProps,
    },
    render: ({ body, paddings, margins, align, puck }) => {
        return (
            <p
                className={`text-${align} ${paddingFields.classNames(paddings)} ${marginFields.classNames(margins)}`}
            >
                {body}
            </p>
        );
    },
};