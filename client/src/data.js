

const workdata = [
    {
        name: "Hospitality Projects",
        slug: "hospitality-projects",
        desc: "Our hospitality projects are executed with a strong focus on functionality, compliance, and build quality. We deliver end-to-end solutions covering civil works, interior fit-outs, and MEP coordination, ensuring that each project meets brand standards, safety norms, and operational demands.",
        projects: [
            {
                name: "Ramada by Wyndham - Jaipur",
                overview:
                    "A premium hospitality project executed in line with international brand standards, focusing on quality interiors, functional planning, and long-term operational performance.",
                keyFeatures: [
                    "Premium interior fit-out executed as per Wyndham brand specifications",
                    "Grand lobby with high-quality finishes and durable materials",
                    "Integrated poolside development designed for guest comfort and ease of maintenance",
                    "Coordinated execution of civil, interior, and MEP works",
                    "Strict adherence to safety norms, quality standards, and delivery timelines"
                ],
                img: [
                    "data:image/jpeg;base64,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",
                    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxKNkK5X8LUTiy7XidhXbBDhjd99lH__lmjPMNsVS9AeRJFmZ-BiFtNNmoXqqVdoZCSlYXd9FR8R7zHHYxe8L95kNSQDKGa0TtBJMQFuAvJ5Vre17rMLmKnVlDHo6Fy4b8nOABJuQ=w252-h189-k-no",
                    "https://lh4.googleusercontent.com/proxy/c3EmQ6vlia5HrPXKZ4MctEbh6LO6jVrmmVa5jrJS1K6-GOt85buIHmROM49JfUA--Tmk-zMnU5NL0M2GUnqXBZXt2xLUR8ZnTf_f-yU55fWPlVTcLBZxs72AJQq-iVDcXzbRAfrnhWuziVBYGvMQfj8dtD05Wg=w252-h168-k-no"
                ]
            },

            {
                name: "Marriott Hotel - Jaipur",
                overview:
                    "A high-end hospitality project executed to meet Marriott’s global standards, focusing on premium interiors, functional layouts, and long-term operational efficiency.",
                keyFeatures: [
                    "Execution of luxury guest rooms and suites aligned with Marriott brand guidelines",
                    "High-quality interior finishes designed for durability and guest comfort",
                    "Efficient space planning to support hotel operations and services",
                    "Integrated coordination of civil, interior, and MEP works",
                    "Strict adherence to quality benchmarks, safety norms, and delivery schedules"
                ],
                img: [
                    "data:image/jpeg;base64,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",
                    "https://lh3.googleusercontent.com/proxy/ibgPkQx_IUDPLT_XWwJZmRURHFvn7w5oxr9LcpozdOd8I8AEm41Ch5ECU7jZ7Hq7HGGYRggtj9nf6X2CNgFs4FnJLxUve8GslE3PdPL9k1e9l7oIsXmMdLP0cNM9c9QeVJcaXvlKmJKeiFae_2vRgbTrEoDjQg=s1360-w1360-h1020-rw",
                    "https://lh3.googleusercontent.com/proxy/sQbvOK_1E1emS6uSE2s25sm9bUaYDIBIpeHJ0CmZaZxl6c-T6Th66JoKChBZCIL1SLWRwx_a5T498ND-fTcs1q_sYSpqk6Y2PTBkNhVUcgS-wNVkheWq_Q_DUwdvjoZACReF8x2rF8g_sihgxxFnYaa1N4muNQ=s1360-w1360-h1020-rw"
                ]
            },

            {
                name: "Cygnett Collection KK Hotel - Ayodhya",
                overview:
                    "A contemporary hospitality project delivered with a focus on functional planning, brand-compliant interiors, and efficient execution tailored to the needs of modern business and leisure travelers.",
                keyFeatures: [
                    "Modern interior fit-out aligned with Cygnett brand standards",
                    "Efficient space planning to support smooth hotel operations",
                    "Durable finishes selected for high-traffic hospitality areas",
                    "Integrated execution of civil, interior, and MEP works",
                    "Timely delivery with adherence to safety and quality benchmarks"
                ],
                img: [
                    "https://d2gsigjpujdc9o.cloudfront.net/images/gallery_images/cygnett-collection-ayodhya-facade.jpg",
                    "https://www.cygnetthotels.com/blog/wp-content/uploads/2024/03/ayodhya-blog-img4.jpg",
                    "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3335/x_0,y_522,w_4996,h_2813,r_0,c_crop,q_60,fl_progressive/w_900,f_auto,c_fit/cygnett-collection-kk-hotel-ayodhya/Superior_5_jjnv4y"
                ]
            },
            {
                name: "Maya International - Ayodhya",
                overview:
                    "A hospitality development executed with a balance of contemporary functionality and refined interiors, designed to meet operational requirements while offering a comfortable and efficient guest experience.",
                keyFeatures: [
                    "Interior execution aligned with hospitality performance and quality standards",
                    "Well-planned guest rooms and public areas for smooth operational flow",
                    "Use of durable materials suitable for continuous hotel operations",
                    "Coordinated civil, interior, and MEP execution for efficient delivery",
                    "Compliance with safety norms, quality benchmarks, and project timelines"
                ],
                img: [
                    "https://lh3.googleusercontent.com/p/AF1QipPIWlafTzLv3_qC5f1vOQxcYqfSDuBL5ZNTODc1=w324-h312-n-k-no",
                    "https://lh3.googleusercontent.com/p/AF1QipPIWlafTzLv3_qC5f1vOQxcYqfSDuBL5ZNTODc1=w324-h312-n-k-no",
                    "https://lh3.googleusercontent.com/p/AF1QipPIWlafTzLv3_qC5f1vOQxcYqfSDuBL5ZNTODc1=w324-h312-n-k-no"
                ]
            },
            {
                name: "Sterling Sarayu Hotel - Ayodhya",
                overview:
                    "A boutique hospitality project executed to deliver a refined guest experience through quality interiors, efficient planning, and construction practices aligned with operational and brand requirements.",
                keyFeatures: [
                    "Boutique-style interior execution with attention to detail and finish quality",
                    "Guest rooms and common areas planned for comfort and operational efficiency",
                    "Durable materials and finishes selected for long-term performance",
                    "Integrated coordination of civil, interior, and MEP works",
                    "Execution in compliance with safety standards, quality benchmarks, and delivery timelines"
                ],
                img: [
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/788811111.jpg?k=3cc50376589b3febd8e08695ec9096b0b31ff2cc0ee165fcfb7ccb529d8e4495&o=",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/788811104.jpg?k=bb73a9c5dfe163781fddaf27e973085c3c4541b6ce845fbc780cbc52921a923a&o=",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/788811062.jpg?k=3e48f29535bd56e71363046b54b3a05d12e05f1144e0c459a8c562abf58697f5&o="
                ]
            },
            {
                name: "Diviji Inn - Ayodhya",
                overview:
                    "A modern hospitality project focused on efficient execution, functional interiors, and durable construction practices designed to support smooth hotel operations and guest comfort.",
                keyFeatures: [
                    "Modern interior fit-out aligned with hospitality operational requirements",
                    "Efficient space planning for guest rooms and public areas",
                    "Use of durable, low-maintenance materials for continuous usage",
                    "Coordinated execution of civil, interior, and MEP works",
                    "Delivery in compliance with safety norms, quality standards, and agreed timelines"
                ],
                img: [
                    "https://lh3.googleusercontent.com/p/AF1QipPIWlafTzLv3_qC5f1vOQxcYqfSDuBL5ZNTODc1=w324-h312-n-k-no",
                    "https://lh3.googleusercontent.com/p/AF1QipPIWlafTzLv3_qC5f1vOQxcYqfSDuBL5ZNTODc1=w324-h312-n-k-no",
                    "https://lh3.googleusercontent.com/p/AF1QipPIWlafTzLv3_qC5f1vOQxcYqfSDuBL5ZNTODc1=w324-h312-n-k-no"
                ]
            },
            {
                name: "Cygnett Collection - Jaipur",
                overview:
                    "An urban hospitality project executed with a focus on efficient planning, contemporary interiors, and construction practices aligned with brand standards and operational requirements.",
                keyFeatures: [
                    "Business-hotel oriented interior execution aligned with Cygnett brand guidelines",
                    "Optimized space planning for guest rooms and common areas",
                    "Durable finishes selected for high-usage hospitality environments",
                    "Integrated coordination of civil, interior, and MEP services",
                    "Execution completed in line with safety standards, quality benchmarks, and project timelines"
                ],
                img: [
                    "https://lh3.googleusercontent.com/p/AF1QipPIWlafTzLv3_qC5f1vOQxcYqfSDuBL5ZNTODc1=w324-h312-n-k-no",
                    "https://lh3.googleusercontent.com/p/AF1QipNDcPgd0xuxad2JS--Y6Tk8b0_cZO85nSQb5kg_=w252-h157-k-no",
                    "https://lh3.googleusercontent.com/p/AF1QipMPxMBefrBnjHoBtAblho7vA3DR_F_S91hbaY6H=w252-h189-k-no"
                ]
            },
        ]
    },
    {
        name: "Corporate and Industrial Projects",
        slug: "corporate-and-industrial-projects",
        desc: "Our corporate and industrial portfolio highlights our expertise in delivering office, commercial, and industrial facilities through systematic execution and quality-driven construction practices. Each project is planned and executed to meet functional demands, regulatory requirements, and long-term performance expectations while maintaining strict adherence to timelines and safety standards.",
        projects: [
            {
                name: "Wilo Industries - Vadodara, Jaipur, Indore",
                overview:
                    "Industrial facilities executed with a strong focus on functionality, operational efficiency, and durable construction practices to support manufacturing and industrial operations.",
                keyFeatures: [
                    "Industrial interior and functional layout planning aligned with operational workflows",
                    "Optimized space utilization for efficient movement and process flow",
                    "Use of robust, low-maintenance materials suitable for industrial environments",
                    "Compliance with industrial safety norms and regulatory requirements",
                    "Consistent execution across multiple locations with quality control"
                ],
                img: [
                    "https://media.licdn.com/dms/image/v2/D4D22AQHV3rWRxiLSKA/feedshare-shrink_800/B4DZiJrymUGgAg-/0/1754656617699?e=2147483647&v=beta&t=n1ecUtm-vvxMnCh1D94gtqciTjz-3vOSEOo7kA85H7w",
                    "https://images.jdmagicbox.com/v2/comp/indore/w5/0731px731.x731.150401160029.x4w5/catalogue/wilo-pumps-pvt-ltd-indore-gpo-indore-submersible-pump-manufacturers-xoo6b1jy24.jpg",
                    "https://lh3.googleusercontent.com/p/AF1QipPIWlafTzLv3_qC5f1vOQxcYqfSDuBL5ZNTODc1=w324-h312-n-k-no"
                ]
            },
            {
                name: "Dainik Bhaskar - Patna, Muzaffarpur, Bhopal",
                overview:
                    "Corporate office infrastructure executed to support large-scale media operations, focusing on functional planning, efficient workflows, and reliable construction standards across multiple locations.",
                keyFeatures: [
                    "Office interiors planned to support newsroom, editorial, and administrative functions",
                    "Functional workspace layouts designed for high-activity media operations",
                    "Durable materials selected for continuous daily usage",
                    "Execution aligned with corporate infrastructure standards and timelines",
                    "Consistent delivery across multiple cities with quality and safety compliance"
                ],
                img: [
                    "https://content3.jdmagicbox.com/v2/comp/bhopal/r5/0755px755.x755.140529123019.v9r5/catalogue/dainik-bhaskar-m-p-nagar-bhopal-newspaper-vendors-xgJ2S3nuFy.jpg",
                    "https://content3.jdmagicbox.com/v2/comp/bhopal/r5/0755px755.x755.140529123019.v9r5/catalogue/dainik-bhaskar-m-p-nagar-bhopal-newspaper-vendors-xgJ2S3nuFy.jpg",
                    "https://lh3.googleusercontent.com/p/AF1QipPIWlafTzLv3_qC5f1vOQxcYqfSDuBL5ZNTODc1=w324-h312-n-k-no"
                ]
            },
            {
                name: "Spinny - Pan-India",
                overview:
                    "Corporate and retail infrastructure executed across multiple locations with a focus on brand consistency, functional layouts, and efficient execution to support customer-facing and operational requirements.",
                keyFeatures: [
                    "Brand-aligned retail and operational interior execution",
                    "Consistent design and construction standards across multiple locations",
                    "Functional layouts supporting customer flow and backend operations",
                    "Durable finishes suitable for high-traffic retail environments",
                    "Timely execution with adherence to safety and quality standards"
                ],
                img: [
                    "https://mda.spinny.com/sp-file-system/public/2024-01-22/bcfce0d01b0a4f9cb58cfb72ab069940/raw/file.jpeg?q=85",
                    "https://images.jdmagicbox.com/v2/comp/delhi/l7/011pxx11.xx11.240731130810.z7l7/catalogue/spinn-car-hub-rcube-monad-mall-rajouri-garden-delhi-apbhuidcq5.jpg",
                    "https://spn-mda.spinny.com/img/JXAcbbV2RZOblgw8kLnnQA/raw/file.jpeg?q=85"
                ]
            },
            {
                name: "Maruti True Value - Lucknow",
                overview:
                    "Commercial showroom infrastructure executed to support vehicle display, customer engagement, and efficient operational flow in alignment with Maruti True Value brand standards.",
                keyFeatures: [
                    "Showroom interior execution aligned with automotive brand guidelines",
                    "Optimized layout planning for vehicle display and customer movement",
                    "Functional customer interaction and sales zones",
                    "Durable finishes suitable for high-footfall commercial environments",
                    "Timely execution with adherence to safety and quality standards"
                ],
                img: [
                    "https://lh3.googleusercontent.com/p/AF1QipPIWlafTzLv3_qC5f1vOQxcYqfSDuBL5ZNTODc1=w324-h312-n-k-no",
                    "https://lh3.googleusercontent.com/p/AF1QipPIWlafTzLv3_qC5f1vOQxcYqfSDuBL5ZNTODc1=w324-h312-n-k-no",
                    "https://lh3.googleusercontent.com/p/AF1QipPIWlafTzLv3_qC5f1vOQxcYqfSDuBL5ZNTODc1=w324-h312-n-k-no"
                ]
            },
        ]
    },
    {
        name: "Residential and Others",
        slug: "residential-and-others",
        desc: "Our residential and specialized projects demonstrate a commitment to quality construction, efficient execution, and compliance with applicable standards. Across varied project types, we deliver solutions that emphasize functionality, durability, and responsible construction practices aligned with client requirements.",
        projects: [
            {
                name: "Dangayach Group",
                overview:
                    "Large-scale residential real estate development executed with a focus on structured planning, construction quality, and long-term durability to support modern urban living requirements.",
                keyFeatures: [
                    "Execution of large-scale residential development projects",
                    "Structured planning aligned with real estate development standards",
                    "Use of durable construction materials for long-term performance",
                    "Coordination across civil and allied construction works",
                    "Compliance with safety norms, quality benchmarks, and timelines"
                ],
                img: [
                    "https://lh3.googleusercontent.com/p/AF1QipPIWlafTzLv3_qC5f1vOQxcYqfSDuBL5ZNTODc1=w324-h312-n-k-no",
                    "https://lh3.googleusercontent.com/p/AF1QipPIWlafTzLv3_qC5f1vOQxcYqfSDuBL5ZNTODc1=w324-h312-n-k-no",
                    "https://lh3.googleusercontent.com/p/AF1QipPIWlafTzLv3_qC5f1vOQxcYqfSDuBL5ZNTODc1=w324-h312-n-k-no"
                ]
            },
            {
                name: "Millinia Residence",
                overview:
                    "Luxury residential furnishing projects delivered with an emphasis on refined interiors, functional planning, and high-quality finishes tailored to premium living environments.",
                keyFeatures: [
                    "Luxury residential interior furnishing execution",
                    "Custom-designed living spaces focused on comfort and aesthetics",
                    "High-quality finishes and material selection",
                    "Efficient coordination for timely residential project delivery",
                    "Execution aligned with client specifications and quality standards"
                ],
                img: [
                    "https://lh3.googleusercontent.com/p/AF1QipPIWlafTzLv3_qC5f1vOQxcYqfSDuBL5ZNTODc1=w324-h312-n-k-no",
                    "https://lh3.googleusercontent.com/p/AF1QipPIWlafTzLv3_qC5f1vOQxcYqfSDuBL5ZNTODc1=w324-h312-n-k-no",
                    "https://lh3.googleusercontent.com/p/AF1QipPIWlafTzLv3_qC5f1vOQxcYqfSDuBL5ZNTODc1=w324-h312-n-k-no"
                ]
            },
        ]
    },
]

export default workdata