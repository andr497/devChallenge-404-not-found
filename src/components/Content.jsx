import scarecrow from '../images/Scarecrow.png';

const Content = () => {
    return(
        <main>
            <img src={scarecrow} alt="scarecrow-404" />
            <article>
                <h1>I have bad news for you</h1>
                <p>
                    The page you are looking for might be removed or is temporarily unavailable.
                </p>
                <button type="button">
                    Back to homepage
                </button>
            </article>
        </main>
    )
}

export default Content;