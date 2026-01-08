document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('secret-input');
    const displayArea = document.getElementById('display-area');

    // Store the original logo HTML to revert easily
    const originalLogoHTML = '<img src="assets/logo.png" alt="Council of Tigers Logo" id="main-logo">';

    const video1 = '<iframe src="https://www.youtube.com/embed/yfVzFK5Wjpo?si=AiIg2FS2-ENqXR_B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

    const video2 = '<iframe src="https://www.youtube.com/embed/p_T97sM9RtU?si=GfpjeSuSH_qyHiXT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></br>';

    input.addEventListener('input', (e) => {
        const value = e.target.value.trim().toLowerCase();

        if (value === 'itstigeringtime') {
            displayArea.innerHTML = video1;
        } else if (value === 'tigersarepoggers') {
            displayArea.innerHTML = '<div style="display:flex; flex-direction:column; align-items:center;">' + video2 + '<audio controls src="assets/AFGDEDAABCE.mp3" style="margin-top:10px;"></audio></div>';
        } else {
            // Check if we need to revert
            // If the current content is NOT the logo, and the input does NOT match a code, revert?
            // User requirement: "removes the logo and replaces the logo wtih an embedded youtube video if so"
            // It doesn't explicitly say what to do if they type more.
            // But usually for these "secret code" things, if you type it wrong, it stays wrong or goes back.
            // I'll make it so if it is NOT one of the codes, we show the logo.
            // This ensures if they delete characters it goes back.
            // To prevent constant re-rendering of the logo, check if it's already there.

            if (!displayArea.querySelector('#main-logo')) {
                displayArea.innerHTML = originalLogoHTML;
            }
        }
    });
});
