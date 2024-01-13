import React, {useEffect} from 'react'
import { useRef } from "react";
import styled from 'styled-components'
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from '../features/user/userSlice';
import { auth, provider } from '../firebase';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom'

function Header() {
    const navRef = useRef(null);
    const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL 
                }))
                navigate("/");
            }
        })
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result)=>{
            let user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL 
            }))
            navigate("/");
        })
    }

    const signOut = () => {
        auth.signOut()
        .then(()=>{
            dispatch(setSignOut());
            navigate("/login");
        })
    }

  return (
    <Nav>
        <Logo src="/images/logo.svg" />
        {
            !userName ? (
            <LoginContainer>
                <Login onClick={signIn}>Login</Login>
            </LoginContainer>
             ):
            <>
                <CustomNavMenu ref={navRef}>
            <NavLink to = '/' style={{color: 'white', textDecoration: 'none' }}>
                <img src="/images/home-icon.svg" />
                <span>HOME</span>
            </NavLink>
            <NavLink style={{color: 'white', textDecoration: 'none' }}>
                <img src="/images/search-icon.svg" />
                <span>SEARCH</span>
            </NavLink>
            <NavLink style={{color: 'white', textDecoration: 'none' }}>
                <img src="/images/watchlist-icon.svg" />
                <span>WATCHLIST</span>
            </NavLink>
            <NavLink style={{color: 'white', textDecoration: 'none' }}>
                <img src="/images/original-icon.svg" />
                <span>ORIGINAL</span>
            </NavLink>
            <NavLink style={{color: 'white', textDecoration: 'none' }}>
                <img src="/images/movie-icon.svg" />
                <span>MOVIES</span>
            </NavLink>
            <NavLink style={{color: 'white', textDecoration: 'none' }}>
                <img src="/images/series-icon.svg" />
                <span>SERIES</span>
            </NavLink>
            <CustomNavButton onClick={showNavbar}>
                <FaTimes />
            </CustomNavButton>
        </CustomNavMenu>
        <NavButton onClick={showNavbar}>
            <FaBars />
        </NavButton>
        <UserImg onClick={signOut} src={userPhoto}/>
            </>
        }
    </Nav>
  )
}

export default Header;

const Nav = styled.nav` 
    height: 70px;
    background: #090b13; 
    display: flex;
    align-items: center;
    padding: 0 36px; 
    overflow-x: hidden;
`
const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: centre;

    @media only screen and (max-width: 1044px) {
        position: fixed;
		top: -120vh;
		left: 0;
		height: 60%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		background-color: #090b13;
		transition: 1s;
        margin-left: 0;
      }    

    a {
        display: flex; 
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative; 
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

`

const CustomNavMenu = styled(NavMenu).attrs({ className: 'responsive-nav'})`
    &.responsive_nav {
        z-index: 1002;
		transform: translateY(120vh);
    }
`

const NavButton = styled.button`
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    color: var(--textColor);
    visibility: hidden;
    opacity: 0;
    font-size: 1.8rem;

    @media only screen and (max-width: 1044px) {
        visibility: visible;
		opacity: 1;
        position: absolute;
		top: 1rem;
		right: 6rem;   
      }
`

const CustomNavButton = styled(NavButton).attrs({ className: 'nav-close-btn' })`
    @media only screen and (max-width: 1044px) {
        position: absolute;
		top: 1.4rem;
		right: 2rem;   
    }
`;

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    @media only screen and (max-width: 1044px) {
        position: absolute;
		top: 0.8rem;
		right: 2rem;   
      }
`

const Login = styled.div`
      border: 1px solid #f9f9f9;
      paddding: 8px 16px;
      border-radius: 4px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      background-color: rgba(0,0,0,0.6);
      transition: all 0.2s ease 0s;
      cursor: pointer;
      padding: 0.5rem 1rem;

      &:hover{
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
      }
`

const LoginContainer = styled.div`
      flex: 1;
      display: flex;
      justify-content: flex-end;
`