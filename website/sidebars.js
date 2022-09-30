const sidebarSettings = {
  docs: [
    "docs/introduction",
    "docs/supported-data-platforms",
    {
      type: "category",
      label: "Develop with dbt",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Get started with dbt Cloud",
          collapsed: false,
          link: { type: 'doc', id: 'guides/getting-started/getting-started' },
          items: [
            "docs/develop/dbt-cloud-features",
          ],
        },
        {
          type: "category",
          label: "Get started with dbt Core",
          collapsed: false,
          link: { type: 'doc', id: 'guides/getting-started/learning-more/getting-started-dbt-core' },
          items: [
            {
              type: "category",
              label: "Installation",
              collapsed: true,
              link: { type: 'doc', id: 'docs/develop/installation' },
              items: [
                "docs/develop/homebrew-install",
                "docs/develop/pip-install",
                "docs/develop/docker-install",
                "docs/develop/source-install",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "About the CLI",
          collapsed: false,
          link: { type: 'doc', id: 'docs/develop/about-the-cli' },
          items: [
            "docs/develop/connection-profiles",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Build dbt projects",
      link: { type: 'doc', id: 'docs/building-a-dbt-project/projects' },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Build your DAG",
          collapsed: true,
          items: [
            "docs/building-a-dbt-project/using-sources",
            {
              type: "category",
              label: "Models",
              items: [
                "docs/building-a-dbt-project/building-models",
                "docs/building-a-dbt-project/building-models/python-models",
              ],
            },
            "docs/building-a-dbt-project/seeds",
            "docs/building-a-dbt-project/snapshots",
            "docs/building-a-dbt-project/exposures",
            "docs/building-a-dbt-project/metrics",
          ],
        },
        {
          type: "category",
          label: "Enhance your models",
          collapsed: true,
          items: [
            "docs/building-a-dbt-project/tests",
            "docs/building-a-dbt-project/building-models/materializations",
            "docs/building-a-dbt-project/building-models/configuring-incremental-models",
          ],
        },
        {
          type: "category",
          label: "Enhance your code",
          collapsed: true,
          items: [
            "docs/building-a-dbt-project/jinja-macros",
            "docs/building-a-dbt-project/building-models/using-variables",
            "docs/dbt-cloud/using-dbt-cloud/cloud-environment-variables",
            "docs/building-a-dbt-project/package-management",
            "docs/building-a-dbt-project/analyses",
          ],
        },
        {
          type: "category",
          label: "Advanced workflows",
          collapsed: true,
          items: [
            {
              type: "category",
              label: "dbt Cloud APIs",
              items: [
                "docs/dbt-cloud/dbt-cloud-api/cloud-apis",
                {
                  type: "category",
                  label: "Authentication",
                  items: [
                    "docs/dbt-cloud/dbt-cloud-api/user-tokens",
                    "docs/dbt-cloud/dbt-cloud-api/service-tokens",
                  ],
                },
                "docs/dbt-cloud/dbt-cloud-api/admin-cloud-api",
                {
                  type: "category",
                  label: "Metadata API",
                  items: [
                    "docs/dbt-cloud/dbt-cloud-api/metadata/metadata-overview",
                    "docs/dbt-cloud/dbt-cloud-api/metadata/metadata-querying",
                    {
                      type: "category",
                      label: "Schema",
                      items: [
                        "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-model",
                        "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-models",
                        "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-modelByEnv",
                        "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-metric",
                        "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-metrics",
                        "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-source",
                        "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-sources",
                        "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-seed",
                        "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-seeds",
                        "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-snapshots",
                        "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-test",
                        "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-tests",
                        "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-exposure",
                        "docs/dbt-cloud/dbt-cloud-api/metadata/schema/metadata-schema-exposures",
                      ],
                    },
                  ],
                },
              ],
            },
            "docs/building-a-dbt-project/hooks-operations",
          ],
        },
        {
          type: "category",
          label: "Organize your outputs",
          collapsed: true,
          items: [
            "docs/building-a-dbt-project/building-models/using-custom-schemas",
            "docs/building-a-dbt-project/building-models/using-custom-databases",
            "docs/building-a-dbt-project/building-models/using-custom-aliases",
            "docs/dbt-cloud/using-dbt-cloud/cloud-setting-a-custom-target-name",
          ],
        },
        "guides/best-practices/how-we-structure/1-guide-overview",
        //"docs/building-a-dbt-project/dont-nest-your-curlies",
        //"docs/building-a-dbt-project/archival",

      ],
    },
    {
      type: "category",
      label: "Deploy dbt projects",
      link: { type: 'doc', id: 'docs/dbt-cloud/deployments/deployment-overview' },
      collapsed: true,
      items: [
        "docs/building-a-dbt-project/managing-environments",
        "docs/building-a-dbt-project/documentation",
        "docs/running-a-dbt-project/using-the-dbt-ide",
        "docs/running-a-dbt-project/running-dbt-in-production",
      ],
    },
    {
      type: "category",
      label: "Contributing",
      items: [
        "docs/contributing/oss-expectations",
        "docs/contributing/contributor-license-agreements",
        "docs/contributing/slack-rules-of-the-road",
        "docs/contributing/long-lived-discussions-guidelines",
        {
          type: "category",
          label: "Adapter development",
          link: {
            type: 'generated-index',
            title: 'Adapter Development',
            description: 'Learn what an adapter is what what\'s required to make one. Also how to build, test, document, promote, and verify your new adapter. Visit the [#adapter-ecosystem](https://getdbt.slack.com/archives/C030A0UF5LM) Slack channel for additional help beyond this section.',

          },
          items: [
            'docs/contributing/adapter-development/1-what-are-adapters',
            'docs/contributing/adapter-development/2-prerequisites-for-a-new-adapter',
            'docs/contributing/adapter-development/3-building-a-new-adapter',
            'docs/contributing/adapter-development/4-testing-a-new-adapter',
            'docs/contributing/adapter-development/5-documenting-a-new-adapter',
            'docs/contributing/adapter-development/6-promoting-a-new-adapter',
            'docs/contributing/adapter-development/7-verifying-a-new-adapter'
          ]
        }
      ],
    },
    {
      type: "category",
      label: "About",
      items: ["docs/about/license", "docs/about/viewpoint"],
    },
    {
      type: "category",
      label: "Frequently asked questions",
      link: {
        type: 'generated-index', title: 'Frequently asked questions',
        description: 'Our Frequently Asked Questions (FAQs) section is a space where you can find an answer to some questions we get asked a lot (but that we’re happy to answer!). If you have a question or are still stuck on something, just reach out to us by emailing support@getdbt.com or clicking on the chat widget, and we’ll do our best to help out.', slug: '/docs/faqs',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'faqs'
        },
      ],
    },
  ],
  "dbt CLI": [
    "dbt-cli/cli-overview",
  ],
  "dbt Cloud": [
    {
      type: "category",
      label: "Overview",
      link: { type: 'doc', id: 'docs/dbt-cloud/cloud-overview' },
      items: [
        'docs/dbt-cloud/cloud-quickstart',
      ],
    },
    {
      type: "category",
      label: "dbt Cloud IDE",
      items: [
        "docs/dbt-cloud/cloud-ide/handling-merge-conflicts",
        "docs/dbt-cloud/cloud-ide/viewing-docs-in-the-ide",
        "docs/dbt-cloud/cloud-ide/the-ide-git-button",
        "docs/dbt-cloud/cloud-ide/ide-beta",
      ],
    },
    {
      type: "category",
      label: "Configuring dbt Cloud",
      items: [
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/connecting-your-database",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-using-a-managed-repository",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-configuring-repositories",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-installing-the-github-application",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/connecting-gitlab",
        {
          type: "category",
          label: "Connecting Azure DevOps",
          link: { type: 'doc', id: 'docs/dbt-cloud/cloud-configuring-dbt-cloud/connecting-azure-devops' },
          items: [
            'docs/dbt-cloud/cloud-configuring-dbt-cloud/setup-azure',
            'docs/dbt-cloud/cloud-configuring-dbt-cloud/authenticate-azure',
          ],
        },
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-import-a-project-by-git-url",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-choosing-a-dbt-version",
        "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-upgrading-dbt-versions",
      ],
    },
    {
      type: "category",
      label: "Using dbt Cloud",
      link: {
        type: 'generated-index',
        title: 'Using dbt Cloud',
        description: 'Learn how you can use dbt Cloud.',
        slug: '/docs/dbt-cloud',
      },
      items: [
        "docs/dbt-cloud/using-dbt-cloud/cloud-enabling-continuous-integration",
        "docs/dbt-cloud/using-dbt-cloud/cloud-generating-documentation",
        "docs/dbt-cloud/using-dbt-cloud/cloud-snapshotting-source-freshness",
        "docs/dbt-cloud/using-dbt-cloud/artifacts",
        "docs/dbt-cloud/using-dbt-cloud/cloud-using-a-custom-cron-schedule",
        "docs/dbt-cloud/using-dbt-cloud/cloud-notifications",
        "docs/dbt-cloud/using-dbt-cloud/cloud-dashboard-status-tiles",
        "docs/dbt-cloud/using-dbt-cloud/cloud-model-timing-tab",
        "docs/dbt-cloud/using-dbt-cloud/cloud-metrics-layer",
      ],
    },
    {
      type: "category",
      label: "Access Control",
      items: [
        "docs/dbt-cloud/access-control/access-control-overview",
        "docs/dbt-cloud/access-control/cloud-seats-and-users",
        "docs/dbt-cloud/access-control/self-service-permissions",
        "docs/dbt-cloud/access-control/enterprise-permissions",
      ],
    },
    {
      type: "category",
      label: "dbt Cloud Enterprise",
      items: [
        "docs/dbt-cloud/dbt-cloud-enterprise",
        {
          type: "category",
          label: "Single Sign On",
          items: [
            "docs/dbt-cloud/dbt-cloud-enterprise/sso-overview",
            "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-sso-with-saml-2.0",
            "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-sso-with-google-gsuite",
            "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-enterprise-sso-with-azure-active-directory",
          ],
        },
        {
          type: "category",
          label: "Database Auth",
          items: [
            "docs/dbt-cloud/dbt-cloud-enterprise/setting-up-enterprise-snowflake-oauth",
            "docs/dbt-cloud/cloud-configuring-dbt-cloud/cloud-setting-up-bigquery-oauth",
          ],
        },
        "docs/dbt-cloud/dbt-cloud-enterprise/audit-log",
      ],
    },
    {
      type: "category",
      label: "dbt Cloud Deployments",
      items: [
        "docs/dbt-cloud/deployments/deployment-overview",
        "docs/dbt-cloud/deployments/multi-tenant-deployment",
        "docs/dbt-cloud/deployments/single-tenant-deployment",
        "docs/dbt-cloud/deployments/deployment-architecture",
      ],
    },

    "docs/dbt-cloud/cloud-dbt-cloud-support",
    {
      type: "category",
      label: "dbt Cloud Release Notes",
      link: { type: 'doc', id: 'docs/dbt-cloud/release-notes' },
      items: [
        {
          type: "autogenerated",
          dirName: "docs/dbt-cloud/release-notes",
        },
      ],
    },
  ],
  reference: [
    {
      type: "category",
      label: "Project configs",
      items: [
        "reference/dbt_project.yml",
        "reference/project-configs/analysis-paths",
        "reference/project-configs/asset-paths",
        "reference/project-configs/clean-targets",
        "reference/project-configs/config-version",
        "reference/project-configs/seed-paths",
        "reference/project-configs/dispatch-config",
        "reference/project-configs/docs-paths",
        "reference/project-configs/log-path",
        "reference/project-configs/macro-paths",
        "reference/project-configs/packages-install-path",
        "reference/project-configs/name",
        "reference/project-configs/on-run-start-on-run-end",
        "reference/project-configs/profile",
        "reference/project-configs/query-comment",
        "reference/project-configs/quoting",
        "reference/project-configs/require-dbt-version",
        "reference/project-configs/snapshot-paths",
        "reference/project-configs/model-paths",
        "reference/project-configs/target-path",
        "reference/project-configs/test-paths",
        "reference/project-configs/version",
      ],
    },
    {
      type: "category",
      label: "Adapter-specific configs",
      items: [
        "reference/resource-configs/postgres-configs",
        "reference/resource-configs/bigquery-configs",
        "reference/resource-configs/redshift-configs",
        "reference/resource-configs/snowflake-configs",
        "reference/resource-configs/singlestore-configs",
        "reference/resource-configs/spark-configs",
        "reference/resource-configs/materialize-configs",
        "reference/resource-configs/firebolt-configs",
        "reference/resource-configs/teradata-configs",
        "reference/resource-configs/clickhouse-configs",
        "reference/resource-configs/mindsdb-configs",
        "reference/resource-configs/mssql-configs",
        "reference/resource-configs/azuresynapse-configs",
        "reference/resource-configs/greenplum-configs",
        "reference/resource-configs/impala-configs",
      ],
    },
    {
      type: "category",
      label: "Resource configs and properties",
      items: [
        "reference/configs-and-properties",
        {
          type: "category",
          label: "General properties",
          items: [
            "reference/resource-properties/columns",
            "reference/resource-properties/config",
            "reference/resource-properties/description",
            "reference/resource-properties/quote",
            "reference/resource-properties/tests",
          ],
        },
        {
          type: "category",
          label: "General configs",
          items: [
            "reference/resource-configs/alias",
            "reference/resource-configs/database",
            "reference/resource-configs/enabled",
            "reference/resource-configs/full_refresh",
            "reference/resource-configs/grants",
            "reference/resource-configs/docs",
            "reference/resource-configs/persist_docs",
            "reference/resource-configs/pre-hook-post-hook",
            "reference/resource-configs/schema",
            "reference/resource-configs/tags",
            "reference/resource-configs/meta",
            "reference/advanced-config-usage",
            "reference/resource-configs/plus-prefix",
          ],
        },
        {
          type: "category",
          label: "For models",
          items: [
            "reference/model-properties",
            "reference/model-configs",
            "reference/resource-configs/materialized",
            "reference/resource-configs/sql_header",
          ],
        },
        {
          type: "category",
          label: "For seeds",
          items: [
            "reference/seed-properties",
            "reference/seed-configs",
            "reference/resource-configs/column_types",
            "reference/resource-configs/quote_columns",
          ],
        },
        {
          type: "category",
          label: "For snapshots",
          items: [
            "reference/snapshot-properties",
            "reference/snapshot-configs",
            "reference/resource-configs/check_cols",
            "reference/resource-configs/strategy",
            "reference/resource-configs/target_database",
            "reference/resource-configs/target_schema",
            "reference/resource-configs/unique_key",
            "reference/resource-configs/updated_at",
            "reference/resource-configs/invalidate_hard_deletes",
          ],
        },
        {
          type: "category",
          label: "For tests",
          items: [
            "reference/test-configs",
            "reference/resource-configs/fail_calc",
            "reference/resource-configs/limit",
            "reference/resource-configs/severity",
            "reference/resource-configs/store_failures",
            "reference/resource-configs/where",
          ],
        },
        {
          type: "category",
          label: "For sources",
          items: [
            "reference/source-properties",
            "reference/source-configs",
            "reference/resource-properties/database",
            "reference/resource-properties/external",
            "reference/resource-properties/freshness",
            "reference/resource-properties/identifier",
            "reference/resource-properties/loader",
            "reference/resource-properties/quoting",
            "reference/resource-properties/schema",
            "reference/resource-properties/overrides",
          ],
        },
        {
          type: "category",
          label: "For analyses",
          items: [
            "reference/analysis-properties",
          ],
        },
        {
          type: "category",
          label: "For exposures",
          items: [
            "reference/exposure-properties",
          ],
        },
        {
          type: "category",
          label: "For macros",
          items: [
            "reference/macro-properties",
            "reference/resource-properties/argument-type"
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Commands",
      items: [
        "reference/dbt-commands",
        {
          type: "category",
          label: "Node selection",
          items: [
            "reference/node-selection/syntax",
            "reference/node-selection/graph-operators",
            "reference/node-selection/set-operators",
            "reference/node-selection/exclude",
            "reference/node-selection/methods",
            "reference/node-selection/putting-it-together",
            "reference/node-selection/yaml-selectors",
            "reference/node-selection/test-selection-examples",
            "reference/node-selection/defer",
            "reference/node-selection/state-comparison-caveats",
          ],
        },
        {
          type: "category",
          label: "List of commands",
          items: [
            "reference/commands/build",
            "reference/commands/clean",
            "reference/commands/cmd-docs",
            "reference/commands/compile",
            "reference/commands/debug",
            "reference/commands/deps",
            "reference/commands/init",
            "reference/commands/list",
            "reference/commands/parse",
            "reference/commands/rpc",
            "reference/commands/run",
            "reference/commands/run-operation",
            "reference/commands/seed",
            "reference/commands/snapshot",
            "reference/commands/source",
            "reference/commands/test",
          ],
        },
        "reference/global-cli-flags",
        "reference/global-configs",
        "reference/events-logging",
        "reference/exit-codes",
        "reference/parsing",
      ],
    },
    {
      type: "category",
      label: "Jinja Reference",
      items: [
        {
          type: "category",
          label: "dbt Jinja functions",
          link: {
            type: 'generated-index',
            title: 'dbt Jinja functions',
            description: 'In addition to the standard Jinja library, we\'ve added additional functions and variables to the Jinja context that are useful when working with a dbt project.',
            slug: '/reference/dbt-jinja-functions',
          },
          items: [
            {
              type: "autogenerated",
              dirName: "reference/dbt-jinja-functions",
            },
          ],
        },
        "reference/dbt-classes",
      ],
    },
    {
      type: "category",
      label: "Profiles (CLI only)",
      items: [
        "reference/profiles.yml",
        "reference/warehouse-profiles/bigquery-profile",
        "reference/warehouse-profiles/postgres-profile",
        "reference/warehouse-profiles/redshift-profile",
        "reference/warehouse-profiles/snowflake-profile",
        "reference/warehouse-profiles/mssql-profile",
        "reference/warehouse-profiles/trino-profile",
        "reference/warehouse-profiles/singlestore-profile",
        "reference/warehouse-profiles/spark-profile",
        "reference/warehouse-profiles/databricks-profile",
        "reference/warehouse-profiles/hive-profile",
        "reference/warehouse-profiles/exasol-profile",
        "reference/warehouse-profiles/oracle-profile",
        "reference/warehouse-profiles/azuresynapse-profile",
        "reference/warehouse-profiles/dremio-profile",
        "reference/warehouse-profiles/clickhouse-profile",
        "reference/warehouse-profiles/materialize-profile",
        "reference/warehouse-profiles/rockset-profile",
        "reference/warehouse-profiles/firebolt-profile",
        "reference/warehouse-profiles/teradata-profile",
        "reference/warehouse-profiles/athena-profile",
        "reference/warehouse-profiles/vertica-profile",
        "reference/warehouse-profiles/tidb-profile",
        "reference/warehouse-profiles/glue-profile",
        "reference/warehouse-profiles/mindsdb-profile",
        "reference/warehouse-profiles/greenplum-profile",
        "reference/warehouse-profiles/impala-profile",
        "reference/warehouse-profiles/layer-profile",
        "reference/warehouse-profiles/iomete-profile",
        "reference/warehouse-profiles/duckdb-profile",
        "reference/warehouse-profiles/sqlite-profile",
        "reference/warehouse-profiles/mysql-profile",
        "reference/warehouse-profiles/ibmdb2-profile",
        "reference/warehouse-profiles/alloydb-profile",
      ],
    },
    {
      type: "category",
      label: "dbt Artifacts",
      items: [
        "reference/artifacts/dbt-artifacts",
        "reference/artifacts/manifest-json",
        "reference/artifacts/run-results-json",
        "reference/artifacts/catalog-json",
        "reference/artifacts/sources-json",
        "reference/artifacts/other-artifacts",
      ],
    },
    ,
    {
      type: "category",
      label: "Database Permissions",
      items: [
        "reference/snowflake-permissions",
      ],
    },
  ],
  guides: [
    {
      type: "category",
      label: "Getting Started with dbt Cloud",
      link: { type: 'doc', id: 'guides/getting-started/getting-started' },
      items: [
        {
          type: "category",
          label: "Getting set up",
          link: { type: 'doc', id: 'guides/getting-started/getting-set-up' },
          items: [
            "guides/getting-started/getting-set-up/setting-up-bigquery",
            "guides/getting-started/getting-set-up/setting-up-databricks",
            "guides/getting-started/getting-set-up/setting-up-redshift",
            "guides/getting-started/getting-set-up/setting-up-snowflake",
          ],
        },
        {
          type: "category",
          label: "Building your first project",
          link: { type: 'doc', id: 'guides/getting-started/building-your-first-project' },

          items: [
            "guides/getting-started/building-your-first-project/build-your-first-models",
            "guides/getting-started/building-your-first-project/test-and-document-your-project",
            "guides/getting-started/building-your-first-project/schedule-a-job",
          ],
        },
        {
          type: "category",
          label: "Learning more",
          link: { type: 'doc', id: 'guides/getting-started/learning-more' },
          items: [
            "guides/getting-started/learning-more/getting-started-dbt-core",
            "guides/getting-started/learning-more/using-jinja",
            "guides/getting-started/learning-more/refactoring-legacy-sql",
          ],
        }
      ]
    },
    {
      type: "category",
      label: "Best practices",
      link: {
        type: 'generated-index',
        title: 'Best practice guides',
        description: 'Learn how dbt Labs approaches building projects through our current viewpoints on structure, style, and setup.',
        slug: '/guides/best-practices',
      },
      items: [
        {
          type: "category",
          label: "How we structure our dbt projects",
          link: { type: 'doc', id: 'guides/best-practices/how-we-structure/1-guide-overview' },
          items: [
            "guides/best-practices/how-we-structure/2-staging",
            "guides/best-practices/how-we-structure/3-intermediate",
            "guides/best-practices/how-we-structure/4-marts",
            "guides/best-practices/how-we-structure/5-the-rest-of-the-project",
          ]
        },
      ],
    },
    {
      type: "category",
      label: "Orchestration",
      link: {
        type: 'generated-index',
        title: 'Orchestration guides',
        description: 'Learn how to orchestrate your data transformations in dbt, using dbt Cloud, a variety of popular tools, or both working together.',
        slug: '/guides/orchestration',
      },
      items: [
        {
          type: "category",
          label: "Airflow and dbt Cloud",
          link: { type: 'doc', id: 'guides/orchestration/airflow-and-dbt-cloud/1-airflow-and-dbt-cloud' },
          items: [
            "guides/orchestration/airflow-and-dbt-cloud/2-setting-up-airflow-and-dbt-cloud",
            "guides/orchestration/airflow-and-dbt-cloud/3-running-airflow-and-dbt-cloud",
            "guides/orchestration/airflow-and-dbt-cloud/4-airflow-and-dbt-cloud-faqs",
          ],
        },
        {
          type: "category",
          label: "Customizing CI/CD",
          link: { type: 'doc', id: 'guides/orchestration/custom-cicd-pipelines/1-cicd-background' },
          items: [
            "guides/orchestration/custom-cicd-pipelines/2-lint-on-push",
            "guides/orchestration/custom-cicd-pipelines/3-dbt-cloud-job-on-merge",
            "guides/orchestration/custom-cicd-pipelines/4-something-to-consider",
          ],
        },
      ]
    },
    {
      type: "category",
      label: "Migration",
      items: [
        {
          type: "category",
          label: "Versions",
          link: {
            type: 'generated-index',
            title: 'Version migration guides',
            description: 'Learn how to upgrade to the latest version of dbt Core.',
            slug: '/guides/migration/versions',
          },
          items: [
            {
              type: "autogenerated",
              dirName: "guides/migration/versions",
            },
          ],
        },
        {
          type: "category",
          label: "Tools",
          link: {
            type: 'generated-index',
            title: 'Tool migration guides',
            description: 'Learn how to migrate to dbt from other tools and platforms.',
            slug: '/guides/migration/tools',
          },
          items: [
            {
              type: "category",
              label: "Migrating from stored procedures",
              link: {
                type: 'doc',
                id: 'guides/migration/tools/migrating-from-stored-procedures/1-migrating-from-stored-procedures',
              },
              items: [
                'guides/migration/tools/migrating-from-stored-procedures/2-inserts',
                'guides/migration/tools/migrating-from-stored-procedures/3-updates',
                'guides/migration/tools/migrating-from-stored-procedures/4-deletes',
                'guides/migration/tools/migrating-from-stored-procedures/5-merges',
                'guides/migration/tools/migrating-from-stored-procedures/6-migrating-from-stored-procedures-conclusion',
              ]
            }
          ]
        },
      ]
    },
    {
      type: "category",
      label: "Legacy",
      items: [
        "guides/legacy/debugging-errors",
        "guides/legacy/debugging-schema-names",
        "guides/legacy/navigating-the-docs",
        "guides/legacy/getting-help",
        "guides/legacy/best-practices",
        "guides/legacy/writing-custom-generic-tests",
        "guides/legacy/building-packages",
        "guides/legacy/creating-new-materializations",
        "guides/legacy/understanding-state",
        "guides/legacy/videos",
      ]
    },
  ],
  "Glossary": [
    {
      type: "category",
      label: "Analytics Engineering Glossary",
      link: {
        type: 'generated-index',
        title: 'Analytics Engineering Glossary',
        description: 'The Analytics Engineering Glossary is a living collection of terms & concepts commonly used in the data industry. You can use and contribute to this resource to educate yourself, your team, and your stakeholders.',
        slug: '/glossary',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'terms'
        },
      ],
    },
  ],
};


module.exports = sidebarSettings
