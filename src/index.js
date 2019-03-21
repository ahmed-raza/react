import React from 'react'
import ReactDOM from 'react-dom'
import Faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';
import Message from './Message';

const App = () => {
  return (
    <div className="ui container comments">
      <Message header="Changes in Service" content="We have updated our policy read it!" />
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 04:55PM" avatar={Faker.image.avatar()} content={Faker.lorem.sentence()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 02:00AM" avatar={Faker.image.avatar()} content={Faker.lorem.sentence()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Yesterday at 05:00PM" avatar={Faker.image.avatar()} content={Faker.lorem.sentence()} />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)