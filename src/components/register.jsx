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
import { Chip } from '@nextui-org/react';
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
    const [changeHandlerCounter, setChangeHandlerCounter] = useState(0);
    const [payload, setPayload] = React.useState({
        name: '',
        email: '',
        company: '',
        times: '',
    });
    const [submitted, setSubmitted] = React.useState();
    const [errors, setErrors] = React.useState({});
    const [touched, setTouched] = React.useState(false);

    const changeHandler = (e) => {
        setPayload({ ...payload, [e.target.id]: e.target.value });
        if (changeHandlerCounter > 1) {
            validateForm(payload);
        }
    };

    const handleSelectionChange = (e) => {
        setPayload({ ...payload, times: new Set(e.target.value.split(',')) });
    };

    const closeModel = () => {
        setPayload({
            name: '',
            email: '',
            company: '',
            times: '',
        });
        setTimeout(onClose, 2000);
    };

    const validateForm = (payload) => {
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
                value.match(
                    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/
                );
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

        if (!payload.times) {
            formIsValid = false;
            errors['times'] = '*Please select a time.';
        }

        setErrors(errors);
        return formIsValid;
    };

    const submit = () => {
        setChangeHandlerCounter(changeHandlerCounter + 1);
        if (!validateForm(payload)) {
            console.log('Invalid Payload', payload);
        } else {
            console.log('Payload to Send', payload);
            axios
                .post(
                    'https://sheet.best/api/sheets/debffb9f-6efa-42ff-a917-7888d4e8a92e',
                    { ...payload, times: Array.from(payload.times) }
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

    const validateSelect = () => {
        console.log('touched', touched);
        if (touched) {
            return 'valid';
        } else if (errors.times && !touched) {
            return 'invalid';
        } else {
            return 'valid';
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
                {submitted ? (
                    <ModalContent>
                        <ModalBody className="bg-green-600">
                            <p className="text-white">
                                Successfully Registered
                            </p>
                        </ModalBody>
                    </ModalContent>
                ) : (
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
                                        className="max-w-lg"
                                        errorMessage={errors.times}
                                        onChange={handleSelectionChange}
                                        onClose={() => setTouched(true)}
                                        validationState={validateSelect()}
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
                                    {submitted ? 'Form submitted' : null}
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        color="default"
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
                )}
            </Modal>
        </>
    );
}
