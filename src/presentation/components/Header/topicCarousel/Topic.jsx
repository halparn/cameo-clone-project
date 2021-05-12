import React from 'react';
import { Container } from './styles';
import Topics from '../../Topics/index';

const topicData = [
    { topicName: 'Featured', topicCount: 543 },
    { topicName: 'Actors', topicCount: 7584 },
    { topicName: 'Reality TV', topicCount: 3341 },
    { topicName: 'Athletes', topicCount: 4113 },
    { topicName: 'Musicians', topicCount: 9093 },
    { topicName: 'Comedians', topicCount: 1233 },
    { topicName: 'Creators', topicCount: 6765 },
];

const Topic = () => (
    <Container>
        <Topics topics={topicData} />
    </Container>
);

export default Topic;
