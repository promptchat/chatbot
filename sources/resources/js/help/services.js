

const services = [
    {
        "name": "Whats App",
        "icon": '/icons/whatsapp.png',
        "id": 1,
        "format": "Phone number (i.e. 5555551234)",
        "parameter": "whats_app",
        "fa": "whatsapp"
    },
    {
        "name": "Facebook",
        "icon": '/icons/facebook.png',
        "id": 2,
        "format": "Facebook name (i.e. DevonVan.co.uk)",
        "parameter": "facebook",
        "fa": "facebook"
    }
];

export const getById = (id) => {
    return services.find(service => +service.id === +id)
};

export  default  services;