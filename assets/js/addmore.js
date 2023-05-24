let selectedImages = [];
$(document).ready(function() {
    let folders = ["assets/images/graphic design/", "assets/images/landing page", "assets/images/web design", "assets/images/wordpress"];
    let image_names = ["graphic-design", "landing-page", "web-design", "wordpress"];
    let i = 0;

    while (i<11) {
        let randomFolderIndex = Math.floor(Math.random() * folders.length);
        let randomFolder = folders[randomFolderIndex];
        let randomImageIndex = Math.floor(Math.random() * 7) + 1;
        let imageName = image_names[randomFolderIndex] + randomImageIndex;

        if (!selectedImages.includes(imageName)) {
            let flexContainer = $(".filteredPictures");
            let image = $("<img>");
            image.attr("src", randomFolder + "/"+ imageName + ".jpg");
            image.attr("id", image_names[randomFolderIndex]);
            image.attr("class", "filterImage");
            flexContainer.append(image);
            selectedImages.push(imageName);
            i++;
        }
    }
});

$(document).on('click', '.AddMore', function() {
    let folders = ["assets/images/graphic design/", "assets/images/landing page", "assets/images/web design", "assets/images/wordpress"];
    let image_names = ["graphic-design", "landing-page", "web-design", "wordpress"];
    let j = 0;
    let seed = 1;

    while (j < 12) {
        let randomFolderIndex = Math.floor(Math.random() * folders.length);
        let randomFolder = folders[randomFolderIndex];
        let randomImageIndex = Math.floor(Math.random() * 7) + 1;
        let imageName = image_names[randomFolderIndex] + randomImageIndex;
        seed++;

        if (!selectedImages.includes(imageName)) {
            let flexContainer = $(".filteredPictures");
            let image = $("<img>");
            image.attr("src", randomFolder + "/"+ imageName + ".jpg");
            image.attr("id", image_names[randomFolderIndex]);
            image.attr("class", "filterImage");
            flexContainer.append(image);
            j++;
            selectedImages.push(imageName);
        }
    }
    $('.AddMore').remove();
    $('#all').trigger("click");
});