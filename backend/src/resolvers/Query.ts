import { prisma } from '../../prisma/client.ts'

const Query = {
 
  AllAnnouncements: async (_parents, args, context) => {
    const announcements = await prisma.announcement.findMany({
      orderBy: {
        id: "desc"
      }
    });
    return announcements;
  },

  AllTools: async (_parents, args, context) => {
    const tools = await prisma.tool.findMany({
      orderBy: {
        usage: "desc"
      }
    });
    return tools;
  },

  SearchToolsByCategory: async (_parents, args: { category: string }, context) => {
    const category = args.category;
    const searchToolsByCategory = await prisma.tool.findMany({
      where: {
        category: {
          startsWith: category
        }
      },
      orderBy: {
        usage: "desc"
      }
    }); 

    return searchToolsByCategory;
  },

  SearchToolsByPosition: async (_parents, args: { position: string }, context) => {
    const position = args.position;
    const searchToolsByPosition = await prisma.tool.findMany({
      where: {
        position: position,
      },
      orderBy: {
        usage: "desc"
      }
    });

    return searchToolsByPosition;
  },

  AllDisposableMaterials: async (_parents, args, context) => {
    const materials = await prisma.disposableMaterial.findMany({
      orderBy: {
        usage: "desc"
      }
    });
    return materials;
  },

  AllMachines: async (_parents, args, context) => {
    const machines = await prisma.machine.findMany({
      orderBy: {
        usage: "desc"
      }
    });
    return machines;
  },

  AllMaterials: async(_parents, args, context) => {
    const materials = await prisma.material.findMany({
      orderBy: {
        usage: "desc"
      }
    });
    return materials;
  },

  SearchMaterialsByCategory: async (_parents, args: { category: string }, context) => {
    const category = args.category;
    const searchMaterialsByCategory = await prisma.material.findMany({
      where: {
        category: {
          startsWith: category
        }
      },
      orderBy: {
        usage: "desc"
      }
    }); 

    return searchMaterialsByCategory;
  },

  SearchMaterialsByPosition: async (_parents, args: { position: string }, context) => {
    const position = args.position;
    const searchMaterialsByPosition = await prisma.material.findMany({
      where: {
        position: position,
      },
      orderBy: {
        usage: "desc"
      }
    });

    return searchMaterialsByPosition;
  },

  AllThreeDP: async () => {
    const threeDP = await prisma.threeDP.findMany({
      orderBy: {
        usage: "desc"
      }
    });
    return threeDP;
  },

  SearchThreeDPByCategory: async(_parents, args: { category: string }, context) => {
    const category = args.category;
    const FindThreeDPByCategory = await prisma.threeDP.findMany({
      where: {
          category: {
            startsWith: category
          },          
      },
      orderBy: {
        usage: "desc"
      }
    });   
    return FindThreeDPByCategory;
  },

  SearchThreeDPByPosition: async(_parents, args: { position: string }, context) => {
    const position = args.position;
    const searchThreeDPByPosition = await prisma.threeDP.findMany({
      where: {
        position: position,
      },
      orderBy: {
        usage: "desc"
      }
    });

    return searchThreeDPByPosition;
  },
 
  AllUser: async () => {
    const users = await prisma.user.findMany();
    return users;
  },

  AllUserMaterials: async () => {
    const UserMaterials = await prisma.userMaterial.findMany({
      orderBy: [
        {
          borrowerId: "asc"
        },
        {
          borrowNum: "desc"
        }
      ]
    });
    return UserMaterials;
  },
  
}

export { Query }