import React from 'react';
import { Typography, Divider } from 'antd';
import TodoList from '../components-todo/TodoList';
import Filters from '../components-todo/Filters';
import { Container, Row, Col } from "react-bootstrap";
import ButtonTitleTodo from '../components/common/ButtonTitleTodo'

const { Title } = Typography;

const TodoApp = () => {
    return (
        <section id="todos">
            <Container>
                <ButtonTitleTodo/>
                <Row>
                    <Col size={12}>
                        <div
                            style={{
                                width: '100%',
                                margin: '0 auto',
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: 'white',
                                padding: 20,
                                boxShadow: '0 0 10px 4px #bfbfbf',
                                borderRadius: 5,
                                height: '70vh',
                            }}
                        >
                            <Title style={{ textAlign: 'center' }}>What i'm doing</Title>
                            <Filters />
                            <Divider />
                            <TodoList />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TodoApp;