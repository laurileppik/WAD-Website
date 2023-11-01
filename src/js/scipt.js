fetch('https://api.npoint.io/5c80200ef7e4b2ee9850')
    .then((response) => response.json())
    .then(json => {
        console.log(json);

        const postContainer = document.getElementById('post-container');
        // Loop through each post data in the JSON
        json.forEach(postData => {
            // Create a new post element
            const postElement = document.createElement('div');
            postElement.className = 'post';

            // Create the poster element for each post
            const poster = document.createElement('div');
            poster.className = 'poster';

            // Create the left part of the poster
            const left = document.createElement('div');
            left.className = 'left';
            left.innerHTML = '<div class="image"><img src="res/images/blankpfp.webp" width="25" height="25" alt="My picture"></div>';
            poster.appendChild(left);

            // Create the right part of the poster with the post's creation time
            const right = document.createElement('div');
            right.className = 'right';
            right.innerHTML = `<p>${postData.createTime}</p>`;
            poster.appendChild(right);

            // Append the poster to the post element
            postElement.appendChild(poster);

            // Create the post text element and set its content to the post's body
            const postText = document.createElement('p');
            postText.textContent = postData.body;
            postElement.appendChild(postText);

            // Create the like button for each post
            const likeButton = document.createElement('div');
            likeButton.className = 'like';
            likeButton.innerHTML = '<img src="res/images/fblike.jpeg" width="25" height="25" alt="My picture">';
            postElement.appendChild(likeButton);

            postContainer.appendChild(postElement);
        });
    });
