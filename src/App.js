import React from 'react';
//
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Section from './components/Section/Section';
import Title from './components/Title/Title';
import PageTitle from './components/PageTitle/PageTitle';
//
import profileUsers from './db/user.json';
import statisticsData from './db/statistical-data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';

console.log(statisticsData);

const {name, tag, location, avatar, stats} = profileUsers

function App() {
    return (
        <div className="App">
            <PageTitle text='*** Hello! This is 1st React Homework ***' />
            <Section>
                <Title text="Task 1. Social network Profile" />
                <Profile
                    name={name}
                    tag={tag}
                    location={location}
                    avatar={avatar}
                    stats={stats}
                />
            </Section>
            <Section>
                <Title text="Task 2. Statistics section" />
                <Statistics title='' stats={statisticsData} />
            </Section>
            <Section>
                <Title text="Task 3. The Friendlist" />
                <FriendList friends={friends} />
            </Section>
            <Section>
                <Title text="Task 4. Transaction History" />
                <TransactionHistory items={transactions} />
            </Section>            
        </div>
    );
}

export default App;