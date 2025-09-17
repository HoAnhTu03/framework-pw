# Giới thiệu 
Project test cho website e-commerce 
- Môi trường dev : link 
- Môi trường production : link 
# Cấu trúc thư mục 
TEST-PW
├── node_modules/     // Folder chứa thư viện pw
├── src
│   ├── fixtures      // Folder chứa fixture của pj
│   │   ├── config.fixture.ts
│   │   └── login.fixture.ts
│   ├── pom
│   │   ├── dashboard
│   │   │   ├── base.page.ts
│   │   │   └── homepage.ts
│   │   └── storefront
├── tests
│   ├── authentication
│   │   └── login.spec.ts
│   └── checkout
│       ├── paypal/
│       ├── spay/
│       └── stripe/
├── tests-examples
│   └── demo-todo-app.spec.ts
├── untlis
│   └── string-untlis.ts
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts  // File config Playwright
└── README.md
└── .env


# Convention 
## Coding convention 
- Quy tắc đặt tên biến: 'camelCase'
- Quy tắc đặt tên file: 'kebab-case'
- Quy tắc đặt tên class: 'PascalCase' 

- Luôn sử dụng dấu {} dù chỉ có 1 if 

## Branch Convention 
- Cú pháp: 'type/<description>' 
## PR convention 
## Workflow 
- Tạo PR
- Run trên server Pass
- Gửi reviewer

## Library convention
- Luôn test các case trước  khi thêm thư viên
