const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)
this.props.user.image
this.props.user.firstName
this.props.user.lastName
class UserCard extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    <div className='user-card'>
    <img src={this.props.user.image} alt={this.props.user.firstName} />
    <h2>
      {this.props.user.firstName}
      {this.props.user.lastName}
    </h2>
  </div>
  }
}