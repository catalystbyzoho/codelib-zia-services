# Catalyst Zia Services - CodeLib Documentation

## Introduction to Catalyst Zia Services

Catalyst Zia services is a suite of fully managed AI/ML-powered components that can be readily incorporated to build smart and reliable applications. These components help detect, process, or predict data that can be highly beneficial in various aspects of your business, such as in understanding your customers better, fetching valuable insights, identifying trends with your existing datasets, analyzing and extracting information from images or documents, and more..

## Components Used in Catalyst

**AdvancedIO Function:**

- `catalyst-zia-services`: A function responsible for executing the features available in catalyst zia services. Currently this codelib supports the following operation.
  - OCR
  - PAN Scanning
  - Cheque Scanning
  - Aadhaar Scanning
  - Passbook Scanning
  - Barcode/QR Scanning

## How to use

Before installing any Catalyst CodeLib solution, please make sure to login to the Catalyst CLI using your Catalyst account by following the steps mentioned [here](https://docs.catalyst.zoho.com/en/cli/v1/cli-command-reference/).

Follow all the steps mentioned below to install, configure and execute the Catalyst Zia Services CodeLib solution.

### Step 1: Install the CodeLib solution

If you are installing the CodeLib solution for an already existing Catalyst project, navigate to its root directory from your terminal and directly proceed with installing the CodeLib.

You can also initialize a new project following the steps mentioned in [this page](https://docs.catalyst.zoho.com/en/cli/v1/initialize-resources/initialize-new-project/). After you initialize the project, proceed to navigate to its root directory and continue with the installation.

Execute the command below in the Catalyst CLI to install the Zoho CRM Bulk Data Processing CodeLib solution:

```bash
catalyst codelib:install https://github.com/catalystbyzoho/codelib-zia-services
```

Upon installation, the pre-configured Catalyst resources of the CodeLib solution will be automatically deployed to the Catalyst console.

### Step 2: Configure Functions Component

1. Open the `functions` directory of your Catalyst project in your local system.
2. In the `catalyst-config.json` file of the `catalyst-zia-services` function, configure the values given below for the key `env_variables`:

   - `CODELIB_SECRET_KEY`

**Note:** Deploy the CodeLib solution again from your local terminal after making all these configuration changes in the functions to ensure that the changes are reflected in the remote console.

## Endpoints

1. **OCR**

   - **Endpoint:** `/ocr`
   - **Method:** POST
   - **Description:** Perform Optical Character Recognition on an image.
   - **Request Body:** FormData
     - `image`: The image to be processed.
   - **cURL Request:**
     ```bash
     curl -X POST "https://your-project-domain/server/catalyst-zia-services/ocr" -H "catalyst-codelib-secret-key: your-codelib-secret-key" -F "image=@path/to/your/image"
     ```
2. **PAN Scanning**

   - **Endpoint:** `/pan`
   - **Method:** POST
   - **Description:** Scan a PAN card.
   - **Request Body:** FormData
     - `image`: The image of the PAN card.
   - **cURL Request:**
     ```bash
     curl -X POST "https://your-project-domain/server/catalyst-zia-services/pan" -H "catalyst-codelib-secret-key: your-codelib-secret-key" -F "image=@path/to/your/pan_card_image"
     ```
3. **Cheque Scanning**

   - **Endpoint:** `/cheque`
   - **Method:** POST
   - **Description:** Scan a cheque.
   - **Request Body:** FormData
     - `image`: The image of the cheque.
   - **cURL Request:**
     ```bash
     curl -X POST "https://your-project-domain/server/catalyst-zia-services/cheque" -H "catalyst-codelib-secret-key: your-codelib-secret-key" -F "image=@path/to/your/cheque_image"
     ```
4. **Passbook Scanning**

   - **Endpoint:** `/passbook`
   - **Method:** POST
   - **Description:** Scan a passbook.
   - **Request Body:** FormData
     - `image`: The image of the passbook.
   - **cURL Request:**
     ```bash
     curl -X POST "https://your-project-domain/server/catalyst-zia-services/passbook" -H "catalyst-codelib-secret-key: your-codelib-secret-key" -F "image=@path/to/your/passbook_image"
     ```
5. **Barcode/QR Scanning**

   - **Endpoint:** `/barcode`
   - **Method:** POST
   - **Description:** Scan a barcode.
   - **Request Body:** FormData
     - `image`: Barcode or QR Image.
   - **cURL Request:**
     ```bash
     curl -X POST "https://your-project-domain/server/catalyst-zia-services/barcode" -H "catalyst-codelib-secret-key: your-codelib-secret-key" -F "image=@path/to/your/barcode_or_qr_image"
     ```
6. **Aadhaar Scanning**

   - **Endpoint:** `/aadhaar`
   - **Method:** POST
   - **Description:** Scan an Aadhaar card.
   - **Request Body:** FormData
     - `front`: The front image of the Aadhaar card.
     - `back`: The back image of the Aadhaar card.
   - **cURL Request:**
     ```bash
     curl -X POST "https://your-project-domain/server/catalyst-zia-services/aadhaar" -H "catalyst-codelib-secret-key: your-codelib-secret-key" -F "front=@path/to/your/aadhaar_front_image" -F "back=@path/to/your/aadhaar_back_image"
     ```

Ensure that you replace placeholders such as `your-project-domain` with your actual project domain, `your-codelib-secret-key` with your secret key, and `@path/to/your/...` with the actual paths to your image files. Additionally, make sure to set the correct `Content-Type` header when sending a request with a request body.
