import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

export default defineConfig({
  name: 'default',
  title: 'AI Marketplace Admin',
  projectId: 'zt2jmhp1',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: [
      {
        name: 'aiTool',
        title: 'AI Tool',
        type: 'document',
        fields: [
          {
            name: 'name',
            title: 'Tool Name',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          },
          {
            name: 'link',
            title: 'Affiliate Link',
            type: 'url',
          },
          {
            name: 'image',
            title: 'Tool Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ],
      },
    ],
  },
});
