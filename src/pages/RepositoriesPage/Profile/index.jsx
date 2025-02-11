import React from 'react'
import PropTypes from 'prop-types'
import {MdGroup, MdLocationCity, MdWork, MdLink} from 'react-icons/md'
import { Header, Container, Avatar, Login, Name, Inner, Data, Link } from './styles'


export default function Profile({user}) {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url} alt='avatar' />
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>

      <Inner>
        <Data> <MdGroup size={20}/> {user.following}&nbsp; <i> Seguidores</i> &middot; {user.followers}&nbsp;<i> Seguindo</i> </Data>
        {user.company && (<Data><MdWork size={20}/> {user.company}</Data>)}
        {user.location && (<Data><MdLocationCity size={20}/> {user.location}</Data>)}
        {user.blog && (<Data><MdLink size={20}/> <Link href={`\\${user.blog}`}>{user.blog}</Link></Data>)}
      </Inner>

    </Container>
  )
}
Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
   avatar_url: PropTypes.string.isRequired,
   followers: PropTypes.number.isRequired,
   following: PropTypes.number.isRequired,
   company: PropTypes.string,
   blog: PropTypes.string,
   location: PropTypes.string,
  }).isRequired
}
