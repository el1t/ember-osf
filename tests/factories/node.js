import FactoryGuy from 'ember-data-factory-guy';
import faker from 'faker';

FactoryGuy.define('node', {
    default: {
        title: () => faker.lorem.words(4),
        description: () => faker.lorem.paragraphs(2, '\n'),
        // Extracted from Node model CATEGORY_MAP as of May 24, 2016
        category: () => faker.random.arrayElement(
            [
                'analysis', 'communication', 'data', 'hypothesis',
                'instrumentation', 'methods and measures', 'procedure', 'project',
                'software', 'other', ''
            ]
        ),

        currentUserPermissions: () => faker.random.arrayElement(['read', 'write', 'admin']),

        fork: false,
        collection: false,
        registration: false,
        public: () => faker.random.boolean(),

        dateCreated: () => faker.date.past(1),
        dateModified: () => faker.date.recent(1),
    },
    traits: {
        hasChildren: {  // Has one layer of child projects
            children: () => FactoryGuy.hasMany('node', 3)
        },
        hasInstitution: {
            affiliatedInstitutions: () => FactoryGuy.hasMany('institution', 1)
        },
        hasComments: {
            comments: () => FactoryGuy.hasMany('comment', 3)
        },
        hasContributors: {
            contributors: () => FactoryGuy.hasMany('contributor', 3)
        },
        hasFiles: {
            // TOOD: Verify usage of trait in factory; it's not well documented
            files: () => FactoryGuy.hasMany('file-provider', 3, 'hasFiles')
        },
        hasRegistrations: {
            registrations: () => FactoryGuy.hasMany('registration', 1)
        },
        hasLogs: {
            logs: () => FactoryGuy.hasMany('log', 5)
        },
        hasTags: {
            tags: () => [faker.lorem.words(1), faker.lorem.words(1), faker.lorem.words(1)]
        }
    }
});
