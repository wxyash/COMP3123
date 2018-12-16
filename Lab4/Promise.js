const Posts = [{Title: 'Title - 1', Body: 'Body for title 1'},
               {Title: 'Title - 2', Body: 'Body for title 2'},
               {Title: 'Title - 3', Body: 'Body for title 3'}]

function getPosts () {
        Posts.forEach((post) => {
            console.log(post.Title + ': ' + post.Body)
        })
}

    async function createPost () {
    await setTimeout( async function  () {
        await Posts.push({Title: 'Title - 4', Body: 'Body for title 4'})
    }, 5000)
    getPosts()
}

createPost()