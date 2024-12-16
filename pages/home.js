function Home() {
    return `
        <div class="z-home-div">
            <h3>Introducing</h3>
            <h1>Own Mini Version Of Virtual DOM</h1>
            <p>
                "When working with HTML, CSS, or JavaScript, we often use the &lt;a&gt;&lt;/a&gt; tag to navigate from one page to another. 
                However, when we do this, the entire browser tab reloads, which can slow down the user experience. 
                This also means we need to write separate code for navigation bars on each page, increasing the complexity. 
                To solve this problem, I created a simple version of a virtual DOM using just JavaScript. 
                I wrote HTML and CSS code inside a JavaScript function and called it when needed. 
                This approach allows us to create a single-page application using only core languages 
                like HTML, CSS, and JavaScript without needing to learn complex frameworks like React or Next.js. 
                I hope you find this idea interesting!"
            </p>
            <p class="z-alert-note">Note : Open the deployed link in a laptop browser for a better understanding of how the project works.</p>
        </div>
    `;
}

export default Home;