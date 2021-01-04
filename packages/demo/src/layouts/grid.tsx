import { mdiHomeOutline } from "@mdi/js"
import Icon from "@mdi/react"
import {
  Container,
  Card,
  FlexRow,
  Breadcrumb,
  Grid,
  Row,
  FlexColumn,
} from "@rap/ui"
import React from "react"
import styled from "styled-components"

const GridPageContainer: any = styled(Container)`
  .indent {
    text-indent: 10px;
    margin-left: 20px;
    line-height: 30px;
  }
  .col {
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    padding: 10px;
  }
  .row {
    .grid {
      .col {
        border: 1px solid rgba(0, 0, 0, 0.3);
      }

      &:not(:last-child) {
        .col {
          border-right: none;
        }
      }
    }

    &:not(:last-child) {
      .col {
        border-bottom: none;
      }
    }
  }
`

const GridPage: React.FC = () => {
  return (
    <GridPageContainer>
      <Card withBackground={false}>
        <FlexRow gap="10px" position="center" align="left">
          <h3 style={{ borderRight: "1px solid #999", paddingRight: "12px" }}>
            Grid
          </h3>
          <Breadcrumb
            item={[
              { name: <Icon path={mdiHomeOutline} size={0.85} />, to: "/" },
              { name: "Layouts", to: "#" },
              { name: "Grid", to: "" },
            ]}
          />
        </FlexRow>
      </Card>
      <Card xsCol="12">
        <h5>Overview</h5>
        <p>
          This uses the grid system concept as bootstrap. Here is a brief look
          of how it works
        </p>
        <ul>
          <li className="indent">
            Place a set of columns using <code>Grid</code> in a horizontal space
            defined by a <code>Container</code> / <code>Row</code> or a known
            width.
          </li>
          <li className="indent">
            The grid system is a value from 1-12 to represent its range. For
            example, four columns of equal width can be created by{" "}
            <code>lgCol = "3"</code>
          </li>
          <li className="indent">
            Content should be placed directly inside the grid.
          </li>
          <li className="indent">
            If the sum of the columns in a row is more than 12, the last column
            is moved to another row underneath.
          </li>
        </ul>
      </Card>
      <Card xsCol="12">
        <h5>Visual Concept</h5>
        <FlexColumn gap="0px">
          <Row>
            <Grid lgCol="12">
              <div className="col">
                <FlexRow align="center">
                  <p>12</p>
                </FlexRow>
              </div>
            </Grid>
          </Row>
          <Row>
            <Grid lgCol="6">
              <div className="col">
                <FlexRow align="center">
                  <p>6</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="6">
              <div className="col">
                <FlexRow align="center">
                  <p>6</p>
                </FlexRow>
              </div>
            </Grid>
          </Row>
          <Row>
            <Grid lgCol="4">
              <div className="col">
                <FlexRow align="center">
                  <p>4</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="4">
              <div className="col">
                <FlexRow align="center">
                  <p>4</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="4">
              <div className="col">
                <FlexRow align="center">
                  <p>4</p>
                </FlexRow>
              </div>
            </Grid>
          </Row>

          <Row>
            <Grid lgCol="3">
              <div className="col">
                <FlexRow align="center">
                  <p>3</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="3">
              <div className="col">
                <FlexRow align="center">
                  <p>3</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="3">
              <div className="col">
                <FlexRow align="center">
                  <p>3</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="3">
              <div className="col">
                <FlexRow align="center">
                  <p>3</p>
                </FlexRow>
              </div>
            </Grid>
          </Row>

          <Row>
            <Grid lgCol="2">
              <div className="col">
                <FlexRow align="center">
                  <p>2</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="2">
              <div className="col">
                <FlexRow align="center">
                  <p>2</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="2">
              <div className="col">
                <FlexRow align="center">
                  <p>2</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="2">
              <div className="col">
                <FlexRow align="center">
                  <p>2</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="2">
              <div className="col">
                <FlexRow align="center">
                  <p>2</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="2">
              <div className="col">
                <FlexRow align="center">
                  <p>2</p>
                </FlexRow>
              </div>
            </Grid>
          </Row>

          <Row>
            <Grid lgCol="1">
              <div className="col">
                <FlexRow align="center">
                  <p>1</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="1">
              <div className="col">
                <FlexRow align="center">
                  <p>1</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="1">
              <div className="col">
                <FlexRow align="center">
                  <p>1</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="1">
              <div className="col">
                <FlexRow align="center">
                  <p>1</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="1">
              <div className="col">
                <FlexRow align="center">
                  <p>1</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="1">
              <div className="col">
                <FlexRow align="center">
                  <p>1</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="1">
              <div className="col">
                <FlexRow align="center">
                  <p>1</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="1">
              <div className="col">
                <FlexRow align="center">
                  <p>1</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="1">
              <div className="col">
                <FlexRow align="center">
                  <p>1</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="1">
              <div className="col">
                <FlexRow align="center">
                  <p>1</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="1">
              <div className="col">
                <FlexRow align="center">
                  <p>1</p>
                </FlexRow>
              </div>
            </Grid>
            <Grid lgCol="1">
              <div className="col">
                <FlexRow align="center">
                  <p>1</p>
                </FlexRow>
              </div>
            </Grid>
          </Row>
        </FlexColumn>
      </Card>

      <Card xsCol="12">
        <h5>Responsive layout</h5>
        <p>
          For device size specific layout use the following <code>props</code> :
        </p>

        <ul>
          <li className="indent">
            <code>lgCol</code> : is for large devices such as desktops and
            monitors (min-width: 1200px).
          </li>
          <li className="indent">
            <code>mdCol</code> : is for medium large devices such as laptops
            (max-width: 1200px).
          </li>
          <li className="indent">
            <code>smCol</code> : is for small devices such as laptops and
            tablets (max-width: 992px).
          </li>
          <li className="indent">
            <code>xsCol</code> : is for extra small devices such as phones and
            tablets (small) (max-width: 768px).
          </li>
        </ul>
      </Card>
    </GridPageContainer>
  )
}
export default GridPage
