// script.js

function showMemberBio(member) {
    const bioContent = document.getElementById("bioContent");

    const bios = {
        "All Kru": `Topi Jerami dinamai berdasarkan tanda tangan Luffy, topi yang diberikan kepadanya oleh "Si Rambut Merah" Shanks dan sebelumnya oleh Gol D. Roger. Kru ini pertama kali disebut sebagai Bajak Laut Topi Jerami oleh Smoker di Kerajaan Alabasta. Mereka pertama kali berlayar di kapal Going Merry, yang merupakan kapal resmi pertama Topi Jerami hingga Arc Water 7. Selama Arc Post-Enies Lobby, Franky dan Iceburg membangun kapal baru, yang diberi nama Thousand Sunny oleh Iceburg meskipun para anggota sempat memperdebatkan nama yang berbeda.
            <br>Instagram: <a href="https://www.instagram.com/onepiece_official">@onepiece_official</a>
            <br>Twitter: <a href="https://twitter.com/OnePieceAnime">@OnePieceAnime</a>
            <br>YouTube: <a href="https://www.youtube.com/OnePieceOfficial">@OnePieceOfficial</a>`,

        "Monkey D Luffy": `Stage Name: Monkey D Luffy<br>
        Devil Fruits: Gomu Gomu No Mi Model (Sun God Nika)<br>
        Type Devil Fruits: Paramecia (Mythical Zoan)<br>
        Position: Captain <br>
        Birthday: 5 May, 2003`,

        "Roronoa Zoro": `Stage Name: Roronoa Zoro<br>
        Devil Fruits: - <br>
        Type Devil Fruits: - <br>
        Position: Wakil Captain <br>
        Birthday: 12 Aug, 1998`,

        "Vinsmoke Sanji": `Stage Name: Vinsmoke Sanji<br>
        Devil Fruits: - <br>
        Type Devil Fruits: - <br>
        Position: Koki <br>
        Birthday: 24 Jan, 1998`,

        "Nerona Nami": `Stage Name: Nerona Nami<br>
        Devil Fruits: - <br>
        Type Devil Fruits: - <br>
        Position: Navigator <br>
        Birthday: 16 Apr, 1998`,

        "God Usopp": `Stage Name: God Usopp<br>
        Devil Fruits: - <br>
        Type Devil Fruits: - <br>
        Position: Penembak Jitu <br>
        Birthday: 1 Jan, 2003`,

        "Tony Tony Chopper": `Stage Name: Tony Tony Chopper<br>
        Devil Fruits: Hito Hito No Mi Model (Human)<br>
        Type Devil Fruits: Zoan<br>
        Position: Dokter <br>
        Birthday: 10 May, 2010`,

        "Nico Robin": `Stage Name: Nico Robin<br>
        Devil Fruits: Hana Hana No Mi<br>
        Type Devil Fruits: Paramecia<br>
        Position: Arkeolog <br>
        Birthday: 22 July, 1991`,

        "Franky": `Stage Name: Franky<br>
        Devil Fruits: - <br>
        Type Devil Fruits: - <br>
        Position: Ahli Kapal <br>
        Birthday: 29 June, 1980`,

        "Brook": `Stage Name: Brook<br>
        Devil Fruits: Yomi Yomi No Mi<br>
        Type Devil Fruits: Paramecia<br>
        Position: Musisi <br>
        Birthday: 11 Mar, 1729`,

        "Jinbei": `Stage Name: Jinbei<br>
        Devil Fruits: - <br>
        Type Devil Fruits: - <br>
        Position: Ahli Bela Diri <br>
        Birthday: 2 Apr, 1975`
    };

    bioContent.innerHTML = `<h2>${member}</h2><p>${bios[member] || "Informasi tidak tersedia"}</p>`;
    document.getElementById("bioModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("bioModal").style.display = "none";
}
