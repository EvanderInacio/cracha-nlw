const socialMedia = {
  github: 'EvanderInacio',
  youtube: 'UCYWd6lz2dj5Cc-iWHCiJU5A',
  facebook: 'evandder.lopes',
  twitter: 'Evander_Inacio',
  instagram: 'evander_inacio'
}

function changeSocial() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${socialMedia[social]}`
  }
}

changeSocial()

function getGitHubProfile() {
  const url = `https://api.github.com/users/${socialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      UserLink.href = data.html_url
      userAvatar.src = data.avatar_url
      UserLogin.textContent = data.login
    })
}

getGitHubProfile()
