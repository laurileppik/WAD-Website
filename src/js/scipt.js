// Your fetch code to get JSON data
fetch('https://api.npoint.io/5c80200ef7e4b2ee9850')
    .then((response) => response.json())
    .then(json => {
        console.log(json);

        const postContainer = document.getElementById('post-container');

        json.forEach(postData => {
            const postElement = document.createElement('div');
            postElement.className = 'post';

            const poster = document.createElement('div');
            poster.className = 'poster';

            const left = document.createElement('div');
            left.className = 'left';
            left.innerHTML = '<div class="image"><img src="res/images/blankpfp.webp" width="25" height="25" alt="My picture"></div>';
            poster.appendChild(left);

            const right = document.createElement('div');
            right.className = 'right';
            right.innerHTML = `<p>${postData.createTime}</p>`;
            poster.appendChild(right);

            postElement.appendChild(poster);

            const postText = document.createElement('p');
            postText.textContent = postData.body;
            postElement.appendChild(postText);

            const likeButton = document.createElement('div');
            likeButton.className = 'like';
            likeButton.innerHTML = '<img src="res/images/fblike.jpeg" width="25" height="25" alt="My picture">';
            postElement.appendChild(likeButton);

            postContainer.appendChild(postElement);
        });
    });
