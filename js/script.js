function showMember(memberName) {
  const content = document.getElementById("content");
  let profileContent = "";

  switch (memberName) {
      case "Monkey D Luffy":
          profileContent = `
              <div class="profile-card">
                  <h2>Monkey D Luffy</h2>
                  <div class="profile-image">
                      <img src="image/A1.jpg" alt="Monkey D Luffy">
                  </div>
                  <p><strong>Name :</strong> Monkey D Luffy</p>
                  <p><strong>Position:</strong> Captain</p>
              </div>`;
          break;
      case "Roronoa Zoro":
          profileContent = `
              <div class="profile-card">
                  <h2>Roronoa Zoro</h2>
                  <div class="profile-image">
                      <img src="image/A2.jpg" alt="Roronoa Zoro">
                  </div>
                  <p><strong>Stage Name:</strong> Roronoa Zoro</p>
                  <p><strong>Position:</strong> Wakil Kapten</p>
              </div>`;
          break;
      case "Vinsmoke Sanji":
          profileContent = `
              <div class="profile-card">
                  <h2>Vinsmoke Sanji</h2>
                  <div class="profile-image">
                      <img src="image/A3.jpg" alt="Vinsmoke Sanji">
                  </div>
                  <p><strong>Stage Name:</strong>Vinsmoke Sanji</p>
                  <p><strong>Position:</strong> Koki</p>
              </div>`;
          break;
      case "Nerona Nami":
          profileContent = `
              <div class="profile-card">
                  <h2>Nerona Nami</h2>
                  <div class="profile-image">
                      <img src="image/A4.jpg" alt="Nerona Nami">
                  </div>
                  <p><strong>Stage Name:</strong> Nerona Nami</p>
                  <p><strong>Position:</strong> Navigator</p>
              </div>`;
          break;
      case "God Usop":
          profileContent = `
              <div class="profile-card">
                  <h2>God Usop</h2>
                  <div class="profile-image">
                      <img src="image/A5.jpg" alt="God Usop">
                  </div>
                  <p><strong>Stage Name:</strong>God Usop</p>
                  <p><strong>Position:</strong> Penembak Jitu</p>
              </div>`;
          break;
      case "Tony Tony Chopper":
          profileContent = `
              <div class="profile-card">
                  <h2>Tony Tony Chopper</h2>
                  <div class="profile-image">
                      <img src="image/A6.jpg" alt="Tony Tony Chopper">
                  </div>
                  <p><strong>Stage Name:</strong> Tony Tony Chopper</p>
                  <p><strong>Position:</strong> Dokter</p>
              </div>`;
          break;
      case "Nico Robin":
          profileContent = `
              <div class="profile-card">
                  <h2>Nico Robin</h2>
                  <div class="profile-image">
                      <img src="image/A7.jpg" alt="Nico Robin">
                  </div>
                  <p><strong>Stage Name:</strong>Nico Robin</p>
                  <p><strong>Position:</strong> Arkeolog</p>
              </div>`;
          break;

          case "Franky":
            profileContent = `
                <div class="profile-card">
                    <h2>Franky</h2>
                    <div class="profile-image">
                        <img src="image/A8.jpg" alt="Franky">
                    </div>
                    <p><strong>Stage Name:</strong> Franky</p>
                    <p><strong>Position:</strong> Ahli Kapal </p>
                </div>`;
            break;

            case "Brook":
                profileContent = `
                    <div class="profile-card">
                        <h2>Brook</h2>
                        <div class="profile-image">
                            <img src="image/A9.jpg" alt="Brook">
                        </div>
                        <p><strong>Stage Name:</strong> </p>
                        <p><strong>Position:</strong> Musisi </p>
                    </div>`;
                break;

                case "Jinbei":
                    profileContent = `
                        <div class="profile-card">
                            <h2>Jinbei</h2>
                            <div class="profile-image">
                                <img src="image/A10.jpg" alt="Jinbei">
                            </div>
                            <p><strong>Stage Name:</strong> Jinbei</p>
                            <p><strong>Position:</strong> Ahli Kemudi</p>
                        </div>`;
                    break;
      default:
          profileContent = `<p>Profile not found.</p>`;
  }

  content.innerHTML = profileContent;
}
