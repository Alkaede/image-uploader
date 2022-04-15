
const PictureBox = () => {

    return (
        <section  className="uploader-box">
            <h1>Upload Your Image</h1>
            <p>File should be Jpeg, Png...</p>

            <form action='/action_page.php'>
                <label for='myfile'>Choose a file</label>
                <input type='file' id='myfile' name='myfile' />
                <input type ='submit' />
            </form>
        </section>
    );
}

export default PictureBox;