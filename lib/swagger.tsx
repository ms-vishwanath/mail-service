
import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: "app/api",
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Mail Service",
        version: "1.0",
      },
      servers: [
        {
          url: process.env.NEXT_PUBLIC_API_URL as string,
          description: "Production server",
        },
        {
          url: "http://localhost:3000/api",
          description: "Local server",
        },
      ],
      security: [],
      paths: {
        "/send-email": {
          post: {
            summary:
              "Send an email with optional text, HTML content, and attachments.",
            requestBody: {
              required: true,
              content: {
                "multipart/form-data": {
                  schema: {
                    type: "object",
                    required: ["email", "subject"],
                    properties: {
                      email: { type: "string", format: "email" },
                      subject: { type: "string" },
                      text: { type: "string" },
                      html: { type: "string" },
                      attachments: {
                        type: "array",
                        items: { type: "string", format: "binary" },
                      },
                    },
                  },
                },
              },
            },
            responses: {
              "200": {
                description: "Email sent successfully.",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example: "Email sent with attachments",
                        },
                      },
                    },
                  },
                },
              },
              "400": {
                description: "Missing required fields.",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        error: {
                          type: "string",
                          example: "Missing required fields: email, subject",
                        },
                      },
                    },
                  },
                },
              },
              "500": {
                description: "Internal server error.",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        error: {
                          type: "string",
                          example: "Failed to send email",
                        },
                        details: {
                          type: "string",
                          example: "Some internal error message",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
  return spec;
};
