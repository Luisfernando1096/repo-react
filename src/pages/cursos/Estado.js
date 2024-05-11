import React, { useState, useEffect } from 'react';

export const handleInputChange = (event, formValues, setFormValues) => {
    const fieldName = event.target.name;
    const newValue = event.target.value;
    setFormValues({
        ...formValues,
        [fieldName]: newValue
    });
};

export function Estado({ curso }) {
    const [formValues, setFormValues] = useState({
        curso: '',
        instructor: ''
    });

    useEffect(() => {
        setFormValues({
            curso: curso.curso,
            instructor: curso.instructor
        });
    }, [curso.curso, curso.instructor]);

    return {
        formValues,
        setFormValues
    };
}
