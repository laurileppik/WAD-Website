/** 
 * Fetch from online endpoint (URI)
fetch('https://api.npoint.io/5c80200ef7e4b2ee9850')
**/

// Integrated JSON fetch
fetch('res/json/myjson.json')
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

    
            if (postData.hasOwnProperty("image")) {
                const imageUrl = postData.image;

                // Create an image element and set its source
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;

                // Append the image element to a container in your HTML
                postElement.appendChild(imgElement);

            }
            

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

    document.querySelector(".user-pic").addEventListener("click", function() {
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
    
    // Close the dropdown when clicking anywhere outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches(".user-pic")) {
            var dropdowns = document.querySelectorAll(".dropdown-content");
            dropdowns.forEach(function(dropdown) {
                if (dropdown.style.display === "block") {
                    dropdown.style.display = "none";
                }
            });
        }
    });
    
    