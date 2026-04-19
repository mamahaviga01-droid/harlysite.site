function showBiodata() {
    document.getElementById("content").innerHTML = `
        <div class="card biodata-center">

            <img src="3.21.25.0.11.jpeg" class="profile">

            <div class="bio-text">
                <h2>BIODATA</h2>
                <p><b>GALANG HARLY RAMADHAN</b></p>
                <p><b>ME 1A</b></p>
                <p><b>POLITEKNIK NEGERI SEMARANG</b></p>
            </div>

        </div>
    `;
}

function showHome() {
    document.getElementById("content").innerHTML = `                                                                                                                                  
        <div class="home-container">

            <!-- kiri -->
            <div class="left">
    <h2>Halo Kawan Sekalian!</h2>
    <p>
    Ini adalah ruang pribadi yang saya bangun untuk berbagi perjalanan, pengalaman, dan proses belajar saya di dunia teknologi.
    </p>
    <p>
    Setiap tulisan di sini merupakan bagian dari proses berkembang, dari hal sederhana hingga yang lebih kompleks.
    </p>
    <p>
    🚀 <i>Mari belajar dan berkembang bersama.</i>
    </p>
</div>

            <!-- kanan -->
            <div class="right">
                <h3>Postingan Terbaru</h3>

                <div class="post-item">
                    <h4>Belajar HTML dari Nol</h4>
                    <p>Dasar membuat website untuk pemula.</p>
                </div>

                <div class="post-item">
                    <h4>Tips Belajar Coding</h4>
                    <p>Cara efektif memahami pemrograman.</p>
                </div>
            </div>

        </div>
    `;
}

function changeContent(html) {
    const content = document.getElementById("content");

    content.style.opacity = 0;

    setTimeout(() => {
        content.innerHTML = html;
        content.style.opacity = 1;
    }, 200);
}

function showArtikel() {
    document.getElementById("content").innerHTML = `
        <div class="card">


            <div class="item">
                <h3>Belajar HTML dari Nol</h3>
                <p>Dasar-dasar HTML untuk pemula.</p>
            </div>

        </div>
    `;
}

function showBuku() {
    document.getElementById("content").innerHTML = `
        <div class="card">

            <div class="item">
                <h3>Logical Fallacy</h3>
                <p>Buku dimana yang membuat kita berpikir untuk berpikir lagi</p>
            </div>

        
        </div>
    `;
}