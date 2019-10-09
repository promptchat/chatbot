import $ from 'jquery';


$.fn.imageInput = function() {
    const $_this = this;
    const $_label = $_this.parent('label.image-input-wrapper');
    const $_input = $_label.find(`.image-input-value`);
    const $_image = $_label.find(`.image-input-preview`);

    this.on('change', function() {
        let formData = new FormData(); // Currently empty
        formData.append('image', this.files[0]);
        $.ajax({
            url: '/image',
            data: formData,
            processData: false,
            contentType: false,
            type: 'POST',
        }).then((response) => {
            let url = response.url;
            $_image.attr('src', url);
            $_input.val(response.id)
        })
    })
};

$.fn.audioInput = function() {
    this.each(function() {
        const $_this = $(this);
        const $_label = $_this.parent('label.audio-input-wrapper');
        const $_input = $_label.find(`.audio-input-value`);
        const $_audio = $_label.find(`.audio-input-preview`);


        $_this.on('change', function() {
            let formData = new FormData(); // Currently empty
            formData.append('audio', this.files[0]);
            $.ajax({
                url: '/sound',
                data: formData,
                processData: false,
                contentType: false,
                type: 'POST',
            }).then((response) => {
                let url = response.url;
                $_audio.attr('src', url);
                $_input.val(response.id)
            })
        })
    })

};