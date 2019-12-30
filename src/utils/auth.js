import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const TokenUserId = 'token_userId'
const TokenSig = 'token_sig'
const headPhoto = 'photo'
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setTokenUser(tokenKey,token) {
  if(tokenKey == TokenUserId){
    return Cookies.set(TokenUserId, token)
  }else if(tokenKey == TokenSig ){
    return Cookies.set(TokenSig, token)
  }
}

export function getTokenUser(tokenKey) {
  return Cookies.get(tokenKey)
}

export function getPhoto() {
  return Cookies.get(headPhoto)
}

export function setPhoto(photo) {
  return Cookies.set(headPhoto, photo)
}
