interface RoadmapProps {
  year: string,
  position: string,
  monthList: {
    month:string,
    content:{text:string}[]
  }[]
}

export const roadMapData = (t:any) =>{
  return [
    {
      year: "2020",
      position: "right",
      monthList: [
        {
          month: t("2020_FEB"),
          content: [
            {
              text: t("2020_FEB_CONTENT1")
            }
          ]
        },
        {
          month: t("2020_OCT"),
          content: [
            {
              text: t("2020_OCT_CONTENT1")
            }
          ]
        },
      ]
    },
    {
      year: "2021",
      position: "left",
      monthList: [
        {
          month: t("2021_FEB"),
          content: [
            {
              text: t("2021_FEB_CONTENT1")
            }
          ]
        },
        {
          month: t("2021_JUN"),
          content: [
            {
              text: t("2021_JUN_CONTENT1")
            }
          ]
        },
        {
          month: t("2021_JUL"),
          content: [
            {
              text: t("2021_JUL_CONTENT1")
            }
          ]
        },
        {
          month: t("2021_SEP"),
          content: [
            {
              text: t("2021_SEP_CONTENT1")
            }
          ]
        },
        {
          month: t("2021_NOV"),
          content: [
            {
              text: t("2021_NOV_CONTENT1")
            }
          ]
        },
      ]
    },
    {
      year: "2022",
      position: "right",
      monthList: [
        {
          month: t("2022_JAN"),
          content: [
            {
              text: t("2022_JAN_CONTENT1")
            }
          ]
        },
        {
          month: t("2022_MAR"),
          content: [
            {
              text: t("2022_MAR_CONTENT1")
            },
            {
              text: t("2022_MAR_CONTENT2")
            }
          ]
        },
        {
          month: t("2022_APR"),
          content: [
            {
              text: t("2022_APR_CONTENT1")
            }
          ]
        },
        {
          month: t("2022_MAY"),
          content: [
            {
              text: t("2022_MAY_CONTENT1")
            }
          ]
        },
        {
          month: t("2022_AUG"),
          content: [
            {
              text: t("2022_AUG_CONTENT1")
            },
            {
              text: t("2022_AUG_CONTENT2")
            }
          ]
        },
        {
          month: t("2022_SEP"),
          content: [
            {
              text: t("2022_SEP_CONTENT1")
            },
            {
              text: t("2022_SEP_CONTENT2")
            }
          ]
        },
        {
          month: t("2022_OCT"),
          content: [
            {
              text: t("2022_OCT_CONTENT1")
            }
          ]
        },
      ]
    },
    {
      year: "2023",
      position: "left",
      monthList: [
        {
          month: t("2023_JAN"),
          content: [
            {
              text: t("2023_JAN_CONTENT1")
            },
            {
              text: t("2023_JAN_CONTENT2")
            }
          ]
        },
        {
          month: t("2023_FEB"),
          content: [
            {
              text: t("2023_FEB_CONTENT1")
            }
          ]
        },
        {
          month: t("2023_APR"),
          content: [
            {
              text: t("2023_APR_CONTENT1")
            }
          ]
        },
        {
          month: t("2023_MAY"),
          content: [
            {
              text: t("2023_MAY_CONTENT1")
            }
          ]
        },
        {
          month: t("2023_JUN"),
          content: [
            {
              text: t("2023_JUN_CONTENT1")
            }
          ]
        },
        {
          month: t("2023_AUG"),
          content: [
            {
              text: t("2023_AUG_CONTENT1")
            }
          ]
        },
        {
          month: t("2023_SEP"),
          content: [
            {
              text: t("2023_SEP_CONTENT1")
            },
            {
              text: t("2023_SEP_CONTENT2")
            }
          ]
        },
        {
          month: t("2023_OCT"),
          content: [
            {
              text: t("2023_OCT_CONTENT1")
            }
          ]
        },
      ]
    },
    {
      year: "2024",
      position: "right",
      monthList: [
        {
          month: t("2024_JAN"),
          content: [
            {
              text: t("2024_JAN_CONTENT1")
            },
            {
              text: t("2024_JAN_CONTENT2")
            }
          ]
        },
        {
          month: t("2024_FEB"),
          content: [
            {
              text: t("2024_FEB_CONTENT1")
            }
          ]
        },
        {
          month: t("2024_MAR"),
          content: [
            {
              text: t("2024_MAR_CONTENT1")
            }
          ]
        },
        {
          month: t("2024_APR"),
          content: [
            {
              text: t("2024_APR_CONTENT1")
            },
            {
              text: t("2024_APR_CONTENT2")
            }
          ]
        },
        {
          month: t("2024_MAY"),
          content: [
            {
              text: t("2024_MAY_CONTENT1")
            },
            {
              text: t("2024_MAY_CONTENT2")
            }
          ]
        },
        {
          month: t("2024_JUN"),
          content: [
            {
              text: t("2024_JUN_CONTENT1")
            },
            {
              text: t("2024_JUN_CONTENT2")
            },
            {
              text: t("2024_JUN_CONTENT3")
            },
            {
              text: t("2024_JUN_CONTENT4")
            }
          ]
        },
        {
          month: t("2024_JUL"),
          content: [
            {
              text: t("2024_JUL_CONTENT1")
            },
            {
              text: t("2024_JUL_CONTENT2")
            },
            {
              text: t("2024_JUL_CONTENT3")
            }
          ]
        },
      ]
    },
  ]
}