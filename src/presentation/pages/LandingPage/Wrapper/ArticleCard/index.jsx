import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image } from './styles';
import useMediaQuery from '../../../../../utils/Hooks/userMediaQuery';
import { Text, Tittle } from '../../../../components/Typography/styles';

const ArticleCard = (props) => {
    const { data } = props;
    const { sm } = useMediaQuery();
    return (
        <Container sm={sm}>
            <Link>
                <Image src={data.imgSource} alt="" />
            </Link>
            <Link>
                <Tittle size="title" weight="bold" family="secondary">
                    {data.articleName}
                </Tittle>
            </Link>
            <div>
                <Text family="secondary">{data.articleAbstract}</Text>
            </div>
        </Container>
    );
};

export default ArticleCard;
