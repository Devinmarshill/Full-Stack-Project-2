SELECT projects.projects_name AS projects, descriptions.descriptions
FROM descriptions
LEFT JOIN projects
ON descriptions.projects_id = projects.id
ORDER BY projects.projects_name;