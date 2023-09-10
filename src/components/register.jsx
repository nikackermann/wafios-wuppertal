import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Checkbox,
    Input,
    Link,
} from '@nextui-org/react';
import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { useState } from 'react';
import axios from 'axios';

const timeOptions = [
    {
        label: 'Sept 20 @ 4:00 PM',
        value: '1',
        description: 'Sept 20th at 4:00 PM',
    },
    {
        label: 'Sept 20 @ 4:30 PM',
        value: '2',
        description: 'Sept 20th at 4:30 PM',
    },
    {
        label: 'Sept 20 @ 5:00 PM',
        value: '3',
        description: 'Sept 20th at 5:00 PM',
    },
    {
        label: 'Sept 21 @ 4:00 PM',
        value: '4',
        description: 'Sept 20th at 5:00 PM',
    },
    {
        label: 'Sept 21 @ 4:30 PM',
        value: '5',
        description: 'Sept 20th at 4:30 PM',
    },
];

export default function Register() {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const [values, setValues] = React.useState(new Set([]));
    const [payload, setPayload] = React.useState({
        name: '',
        email: '',
        company: '',
    });
    const [submitted, setSubmitted] = React.useState();
    const [errors, setErrors] = React.useState({});

    const changeHandler = (e) => {
        setPayload({ ...payload, [e.target.id]: e.target.value });
        const body = combineStates(payload, values);
        validateForm(body);
    };

    const combineStates = (state1, state2) => {
        return {
            ...state1,
            times: Array.from(state2),
        };
    };

    const closeModel = () => {
        setValues(new Set([]));
        setPayload({
            name: '',
            email: '',
            company: '',
        });
        setTimeout(onClose, 1000);
    };

    const validateForm = (payload) => {
        console.log('validateForm Payload: ', payload);
        let errors = {};
        let formIsValid = true;

        if (!payload.name) {
            formIsValid = false;
            errors['name'] = '*Please enter your name.';
        }

        if (!payload.email) {
            formIsValid = false;
            errors['email'] = '*Please enter your email.';
        }

        if (typeof payload.email !== 'undefined') {
            //regular expression for email validation
            const validateEmail = (value) =>
                value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
            2;
            if (validateEmail(payload.email) === null) {
                formIsValid = false;
                errors['email'] = '*Please enter valid email.';
            }
        }

        if (!payload.company) {
            formIsValid = false;
            errors['company'] = '*Please enter your company.';
        }

        if (payload.times.length === 0) {
            formIsValid = false;
            errors['times'] = '*Please select a time.';
        }

        setErrors(errors);
        console.log('Form Validation Errors', errors);
        return formIsValid;
    };

    const submit = () => {
        const body = combineStates(payload, values);
        if (!validateForm(body)) {
        } else {
            axios
                .post(
                    'https://sheet.best/api/sheets/debffb9f-6efa-42ff-a917-7888d4e8a92e',
                    body
                )
                .then((response) => {
                    if (response.status === 200) {
                        setSubmitted(true);
                        console.log(response);
                        closeModel();
                    } else {
                        submitted(false);
                    }
                });
        }
    };

    return (
        <>
            <Button onPress={onOpen} color="primary" className="w-full">
                Register
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                backdrop="blur"
                isDismissable={false}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Register Today
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    id="name"
                                    label="Name"
                                    placeholder="Enter your name"
                                    type="text"
                                    variant="bordered"
                                    onChange={changeHandler}
                                    validationState={
                                        errors.name ? 'invalid' : ''
                                    }
                                    value={payload.name}
                                    errorMessage={errors.name}
                                />
                                <Input
                                    id="email"
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                    variant="bordered"
                                    onChange={changeHandler}
                                    validationState={
                                        errors.email ? 'invalid' : ''
                                    }
                                    value={payload.email}
                                    errorMessage={errors.email}
                                />
                                <Input
                                    id="company"
                                    label="Company"
                                    placeholder="Enter your company"
                                    type="text"
                                    variant="bordered"
                                    onChange={changeHandler}
                                    validationState={
                                        errors.company ? 'invalid' : ''
                                    }
                                    value={payload.company}
                                    errorMessage={errors.company}
                                />
                                <Select
                                    id="times"
                                    label="Select times"
                                    selectionMode="multiple"
                                    placeholder="Select multiple times"
                                    selectedKeys={values}
                                    className="max-w-lg"
                                    onSelectionChange={setValues}
                                    color={errors.times ? 'danger' : 'default'}
                                    errorMessage={errors.times}
                                >
                                    {timeOptions.map((option) => (
                                        <SelectItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                                {/* <p className="text-small text-default-500">
                                    Selected: {Array.from(values).join(', ')}
                                </p> */}
                                {/* <p className="text-small text-default-500">
                                    Selected: {Array.from(values).join(', ')}
                                </p> */}
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="flat"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button color="primary" onPress={submit}>
                                    Submit
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
