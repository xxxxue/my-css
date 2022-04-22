import { NextPage } from 'next';
import { FC, memo } from 'react';
import UserCard from '../components/box/UserCard';

interface IProps {}
// https://www.bilibili.com/video/BV1g44y1G7V1
let page6: NextPage<IProps> = function (props) {
    return (
        <>
        <div className='md:h-screen'>
            
            <UserCard/>
        </div>
        </>
    );
};

export default memo(page6);