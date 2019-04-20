// import React, {Component } from 'react';
// import { Redirect } from 'react-router-dom'
// import axios from 'axios'
// import "./style.css";
// import { Button, Comment, Form, Header } from 'semantic-ui-react'

// class Chat extends Component {
//   constructor() {
//       super()
//       this.state = {
//           comments: [],
//           comment:''
//       }
//       this.getComments = this.getComments.bind(this)
//       this.handleCommentSubmit = this.handleSubmit.bind(this)
//       this.handleChange = this.handleChange.bind(this)

//   }

//   componentDidMount() {
//     this.getComments();
//   }

//   getComments() {
//     const url = this.props.location.pathname
//     API.getComments(url)
//     .then(res => {
//         this.setState({
//             comments : res.data
//         })
//     })
//     .catch(err => console.log(err));
//   }

//   handleChange(event) {
//     this.setState({
//         [event.target.name]: event.target.value
//     })
//   }

//   handleCommentSubmit(event) {
//     event.preventDefault()
//     console.log('post')
//     event.preventDefault();
//       API.addComment({
//           author : this.props.username,
//           comment : this.state.comment
//       })
//         .then(res => this.getComments())
//         .catch(err => console.log(err));
//   }

//   render() {
//     console.log('chat render, props: ')
//     console.log(this.props);
//     return (
//       <Comment.Group>
//       <Header as='h3' dividing>
//         Chat
//       </Header>
      
//       {this.state.comments ? (
//           <div>
//           {this.state.comments.map(comment =>(
//           <Comment key={comment._id}>
//           <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
//             <Comment.Content>
//             <Comment.Author as='a'>{comment.author}</Comment.Author>
//             <Comment.Metadata>
//               <div>{comment.createdAt}</div>
//             </Comment.Metadata>
//             <Comment.Text>{comment.comment}</Comment.Text>
//             <Comment.Actions>
//             <Comment.Action>Reply  
//               <div className="ui labeled button" id="like" tabIndex={0}>
//                   <div className="ui red button" id="red">
//                     <i className="heart icon" /> Like
//                   </div>
//                   <a className="ui basic red left pointing label" id="white">
//                     1,048
//                   </a>
//             </div>
//             </Comment.Action>
//             </Comment.Actions>
//             </Comment.Content>
//           </Comment>
//           ))}
//           </div>
//       ): (
//           <div>
//     <Comment>
//       <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
//       <Comment.Content>
//         <Comment.Author as='a'>Matt</Comment.Author>
//         <Comment.Metadata>
//           <div>Today at 5:42PM</div>
//         </Comment.Metadata>
//         <Comment.Text>How artistic!</Comment.Text>
//         <Comment.Actions>
//           <Comment.Action>Reply  
//             <div className="ui labeled button" id="like" tabIndex={0}>
//                 <div className="ui red button" id="red">
//                   <i className="heart icon" /> Like
//                 </div>
//                 <a className="ui basic red left pointing label" id="white">
//                   1,048
//                 </a>
//            </div>
//       </Comment.Action>
//         </Comment.Actions>
//       </Comment.Content>
//     </Comment>

//     <Comment>
//       <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
//       <Comment.Content>
//         <Comment.Author as='a'>Elliot Fu</Comment.Author>
//         <Comment.Metadata>
//           <div>Yesterday at 12:30AM</div>
//         </Comment.Metadata>
//         <Comment.Text>
//           <p>This has been very useful for my research. Thanks as well!</p>
//         </Comment.Text>
//         <Comment.Actions>
//           <Comment.Action>Reply</Comment.Action>
//         </Comment.Actions>
//       </Comment.Content>
//       <Comment.Group>
//         <Comment>
//           <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
//           <Comment.Content>
//             <Comment.Author as='a'>Jenny Hess</Comment.Author>
//             <Comment.Metadata>
//               <div>Just now</div>
//             </Comment.Metadata>
//             <Comment.Text>Elliot you are always so right :)
//             </Comment.Text>
//             <Comment.Actions>
//               <Comment.Action>Reply</Comment.Action>
//             </Comment.Actions>
//           </Comment.Content>
//         </Comment>
//       </Comment.Group>
//     </Comment>

//     <Comment>
//       <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
//       <Comment.Content>
//         <Comment.Author as='a'>Joe Henderson</Comment.Author>
//         <Comment.Metadata>
//           <div>5 days ago</div>
//         </Comment.Metadata>
//         <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
//         <Comment.Actions>
//           <Comment.Action>Reply</Comment.Action>
//         </Comment.Actions>
//       </Comment.Content>
//     </Comment>
//           </div>
//       )}   
  


//     <Form reply>
//       <Form.TextArea     
//       value = {this.state.comment}
//       handleInputChange = {this.handleChange}
//       handleAddFormSubmit = {this.handleCommentSubmit} />
//       <Button content='Add Reply' labelPosition='left' icon='edit' primary />
//     </Form>

//   </Comment.Group>
//   )
//   }
// }

// export default Chat