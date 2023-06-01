import React from "react";

function InitFormElement({ id, suffix, label, value, onChange }) {
	return (
		<div id={id} className="init-form-element">
            <div className="center">
                <h2 className="label-wrapper">
                    <label htmlFor={`${id}-${suffix}`} className="label__lg">
                        {label}
                    </label>
                </h2>
                <input
                    type="text"
                    id={`${id}-${suffix}`}
                    className="input input__lg"
                    name="text"
                    value={value}
                    autoComplete="off"
                    onChange={onChange}
                />
            </div>
		</div>
	);
}

export default InitFormElement;