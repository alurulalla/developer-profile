const fs = require('fs').promises;
const path = require('path');
const axios = require('axios');

const dataPath = path.join(__dirname, '..', 'data', 'developersProfile.json');
exports.getDevelopers = async (req, res) => {
  try {
    const developersData = JSON.parse(await fs.readFile(dataPath, 'utf-8'));
    const developers = developersData.map((dev) => {
      return {
        id: dev.id,
        avatar_url: dev.avatar_url,
      };
    });
    res.status(200).json(developers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong!' });
  }
};

exports.getDeveloperProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const developersData = JSON.parse(await fs.readFile(dataPath, 'utf-8'));
    const developerProfile = developersData.find((x) => x.id === id);
    if (!developerProfile)
      return res.status(404).json({ error: 'Developer profile not found' });
    return res.status(200).json(developerProfile);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong!' });
  }
};

exports.addDevProfile = async (req, res) => {
  const devProfile = req.body;
  console.log(devProfile);
  try {
    if (!devProfile.github_id)
      return res.status(400).json({ error: 'Github_id is required' });
    const gitData = await axios.get(
      `https://api.github.com/users/${devProfile.github_id}`
    );

    const gitDataRepos = await axios.get(
      `https://api.github.com/users/${devProfile.github_id}/repos`
    );
    const repos = gitDataRepos.data.map((repo) => {
      return {
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description,
        updated_at: repo.updated_at,
      };
    });

    const devProfileData = {
      id: gitData.data.login,
      avatar_url: gitData.data.avatar_url,
      name: gitData.data.name,
      company: gitData.data.company,
      blog: gitData.data.blog,
      location: gitData.data.location,
      email: gitData.data.email ?? devProfile.email,
      bio: gitData.data.bio,
      github_id: gitData.data.login,
      linkedin_id: devProfile.linkedin_id,
      codechef_id: devProfile.codechef_id,
      hackerrank_id: devProfile.hackerrank_id,
      twitter_id: devProfile.twitter_id,
      medium_id: devProfile.medium_id,
      repos,
    };
    const developersData = JSON.parse(await fs.readFile(dataPath, 'utf-8'));
    const developer = developersData.find((x) => x.id === devProfile.github_id);
    if (!developer) {
      const newData = [...developersData, devProfileData];
      await fs.writeFile(dataPath, JSON.stringify(newData), 'utf-8');
    } else {
      const developerIndex = developersData.indexOf(developer);
      if (developerIndex > -1) developersData.splice(developerIndex, 1);
      developersData.push(devProfileData);
      await fs.writeFile(dataPath, JSON.stringify(developersData), 'utf-8');
    }
    res.status(201).json({ message: 'Developer added successfully' });
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: 'Github id not found' });
  }
};

exports.searchDevProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const developersData = JSON.parse(await fs.readFile(dataPath, 'utf-8'));
    const devProfile = developersData.find((x) => x.id === id);
    if (!devProfile) return res.status(200).json([]);
    const developerProfile = [
      {
        id: devProfile.id,
        avatar_url: devProfile.avatar_url,
      },
    ];
    res.status(200).json(developerProfile);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong!' });
  }
};

exports.deleteDevprofile = async (req, res) => {
  const { id } = req.params;
  try {
    const developersData = JSON.parse(await fs.readFile(dataPath, 'utf-8'));
    const devProfile = developersData.find((x) => x.id === id);
    if (!devProfile)
      return res.status(404).json({ error: 'Github id not found' });
    const index = developersData.indexOf(devProfile);
    if (index > -1) developersData.splice(index, 1);
    await fs.writeFile(dataPath, JSON.stringify(developersData), 'utf-8');
    res.status(204).json({ message: 'Developer profile deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong!' });
  }
};
