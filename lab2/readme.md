# FS (File System) Node JS's Module

it direct connect with client OS rater than browser

## Major task of FS Module

- Reading and Writing Files
  - readFile()
  - writeFile()
  - appendFile()
- Directory Management
  - mkdir()
  - rmdir() - depricated
  - rm()
  - readdir()
- Metadata/ Information
  - stat()
  - lstat()
  - fstat()
- Watching for Changes
  - watch()
  - watchFile()
  - unwatchFile()
- Streaming Large File
  - createReadStream()
  - createWriteStream()
- File Operations
  - rename()
  - truncate()
  - unlink()
  - link()
  - syslink()

## CRUD Operation

Create/Insert, Read/Retrieve, Update, Delete

## Item

id, name, price, qty

## operations

1. add to cart
2. show cart
3. remove item from cart
4. Update quantity from cart
5. checkout
   NOTE: all items will be stored in hdd, so after temination of program we can retrieve cart details

## Required File

1. crud.js - it contains all the methods and entry point
2. products.json - it contains the product details in array form
