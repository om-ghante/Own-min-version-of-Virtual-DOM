function WhyCustomVDOM() {
    return `
        <div class="z-whycustomvdom-div">
            <h1>Project Description</h1>

            <section>
                <h2>Idea Behind the Project:</h2>
                <ul>
                    <li><strong>Definition:</strong> A single-page application (SPA) is a web application that loads a single HTML page and dynamically updates content based on user interaction, without reloading the entire page.</li>
                    <li><strong>Motivation:</strong> The idea for this project arose from the desire to improve the user experience in traditional web navigation by avoiding page reloads. The goal was to achieve this with just core web technologies like HTML, CSS, and JavaScript, without needing advanced frameworks like React or Next.js.</li>
                </ul>
            </section>

            <section>
                <h2>Problem in Detail:</h2>
                <ul>
                    <li><strong>Traditional Multi-Page Navigation:</strong>
                        <ul>
                            <li>Websites traditionally use the <code>&lt;a&gt;&lt;/a&gt;</code> tag to link from one page to another.</li>
                            <li>When a user clicks on a link, the entire browser tab reloads, which can cause a noticeable delay and a poor user experience.</li>
                            <li>For example, consider a website with a navigation bar. If the website consists of multiple pages, each page needs its own version of the navigation bar, increasing both the complexity and the amount of code.</li>
                        </ul>
                    </li>
                    <li><strong>Performance Issues:</strong>
                        <ul>
                            <li>Page reloads are slow and resource-intensive because the entire page and all its components must be reloaded from scratch.</li>
                            <li>This can be frustrating for users, especially on slower networks or devices.</li>
                        </ul>
                    </li>
                    <li><strong>Code Redundancy:</strong>
                        <ul>
                            <li>In multi-page websites, different navigation bars and other elements are duplicated across multiple pages, leading to unnecessary repetition in the code.</li>
                            <li>This increases the size of the codebase, making maintenance harder and more error-prone.</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section>
                <h2>What I Did in This Project:</h2>
                <ul>
                    <li><strong>Virtual DOM in JavaScript:</strong>
                        <ul>
                            <li>To overcome the issues caused by page reloads and code duplication, I developed a mini version of a virtual DOM using just JavaScript.</li>
                            <li>The virtual DOM is a lightweight copy of the actual DOM that allows updates to be made dynamically without reloading the entire page.</li>
                        </ul>
                    </li>
                    <li><strong>HTML and CSS Inside JavaScript Functions:</strong>
                        <ul>
                            <li>Instead of writing separate HTML for each page and section, I embedded HTML and CSS directly inside JavaScript functions.</li>
                            <li>These functions are called as needed to render specific components or sections of the page, like navigation bars or content areas.</li>
                            </li>
                        </ul>
                    </li>
                    <li><strong>Dynamic Page Updates:</strong>
                        <ul>
                            <li>By updating only specific parts of the page (e.g., content areas or navigation bars), we can create a single-page application (SPA) experience.</li>
                            <li>The page doesn’t reload when navigating between different sections, making the navigation feel much faster and smoother.</li>
                        </ul>
                    </li>
                    <li><strong>No Need for Advanced Frameworks:</strong>
                        <ul>
                            <li>Unlike modern frameworks such as React, Angular, or Next.js, which require knowledge of JavaScript libraries, this solution allows us to create a functional SPA using only core technologies.</li>
                            <li>The focus was on simplicity and accessibility by avoiding the complexity of learning and using additional libraries.</li>
                        </ul>
                    </li>
                    <li><strong>Improved User Experience:</strong>
                        <ul>
                            <li>Users can navigate the website without experiencing full-page reloads, resulting in a seamless browsing experience.</li>
                            <li>The content is loaded dynamically, giving the feel of a more modern, single-page application.</li>
                        </ul>
                    </li>
                    <li><strong>Reduced Code Redundancy:</strong>
                        <ul>
                            <li>By writing HTML and CSS inside JavaScript functions, the need to duplicate code across multiple pages is eliminated.</li>
                            <li>The navigation bar and other elements can be reused efficiently without unnecessary repetition.</li>
                        </ul>
                    </li>
                </ul>
            </section>

        </div>
    `;
}

export default WhyCustomVDOM;