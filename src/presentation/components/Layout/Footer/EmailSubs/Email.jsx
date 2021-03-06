import React, { useState } from 'react';
import { Form, Button, Alert } from 'antd';
import { Container, Section, EmailInput, Description, ButtonEl, FormEl, Link } from './styles';
import { Tittle, Text } from '../../../Typography/styles';

const validateMessages = {
    required: 'not valid',
    types: {
        email: 'Invalid email address',
        number: 'not valid',
    },
    number: {
        range: 'not valid',
    },
};
const Message = () => (
    <Alert message="You have succesfully Subsciribe Mail List" type="success" showIcon action={<Button size="small" type="text" />} closable />
);

const Email = () => {
    const [isSubscribed, setSubcribe] = useState(false);
    const [form] = Form.useForm();
    const onFinish = (values) => {
        form.resetFields();

        setTimeout(() => {
            setSubcribe(values.user.email);
        }, 1000);
    };
    return (
        <Container>
            <Section>
                <Tittle family="secondary" weight="bold">
                    Join our mailing list
                </Tittle>
                <Description family="secondary" weight="light">
                    Be the first to know about the newest stars and best deals on Cameo
                </Description>
            </Section>
            <Section>
                <FormEl form={form} onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item style={{ width: '69%', marginBottom: '0' }} name={['user', 'email']} rules={[{ type: 'email' }]}>
                        <EmailInput refs="email" type="email" placeholder="Email address" />
                    </Form.Item>
                    <Form.Item style={{ marginBottom: '0' }}>
                        <ButtonEl type="reset" htmlType="submit">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </ButtonEl>
                    </Form.Item>
                </FormEl>
            </Section>
            <Section>{isSubscribed && <Message />} </Section>
            <Section>
                <Text size="description" color="grey">
                    Emails subject to
                    <Link href="#">
                        <Text color="grey" weight="extraBold">
                            {' '}
                            privacy policy
                        </Text>
                    </Link>
                </Text>
            </Section>
        </Container>
    );
};

export default Email;
